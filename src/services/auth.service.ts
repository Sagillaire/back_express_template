import UserModel from "../models/user.model"
import { IUser } from "../interfaces/user.interface"
import { encrypt, verify } from "../utils/bcrypt.handle"
import { IAuth, IVerifySession } from "../interfaces/auth.interface"
import { decodeToken, signToken, verifyToken } from "../utils/jwt.handle"

const loginUser = async ({ email, password }: IAuth) => {
    const checkIs = await UserModel.findOne({ email }).exec()
    if (!checkIs) return 'USER_NOT_FOUND'

    const passwordHash = checkIs.password
    const isCorrect = await verify(password, passwordHash)

    if (!isCorrect) return 'INCORRECT_PASSWORD'

    const token = await signToken({ email })
    const response = {
        isAuth: true,
        user: {
            username: checkIs.username,
            email: checkIs.email,
            status: checkIs.status
        },
        token: token
    }

    return response
}

const registerNewUser = async ({ email, password, username }: IAuth) => {
    // VERIY IF USER EXISTS
    const checkIsEmail = await UserModel.findOne({ email }).exec()
    const checkIsUsername = await UserModel.findOne({ username }).exec()
    if (checkIsEmail) return 'EMAIL_ALREADY_EXISTS'
    if (checkIsUsername) return 'USERNAME_ALREADY_EXISTS'

    // HASH PASSWORD AND CREATE USER
    const passHash = await encrypt(password)
    const registerNewUser = await UserModel.create({
        email,
        username,
        password: passHash
    })

    return registerNewUser
}

const verifySessionService = async ({ token }: IVerifySession) => {
    const verify = await verifyToken(token)
    if (!verify) return {
        isAuth: false,
        user: {},
        token: null
    }

    const userEmail = await decodeToken(token)
    const user = await UserModel.findOne({ email: userEmail }).exec() as IUser;

    const response = {
        isAuth: true,
        user: {
            id: user.id,
            verified: user.verified,
            name: user.name,
            username: user.username,
            email: user.email,
            status: user.status,
            profile_image: user.profile_image,
        },
        token: token
    }

    return response
}

export { loginUser, registerNewUser, verifySessionService }