import { sign, verify } from 'jsonwebtoken'

const secretToken = process.env.JWT_SECRET as string

interface IUserInfo {
    email: string;
}

const signToken = async (userInfo: IUserInfo) => {
    const jwt = sign(userInfo, secretToken, {
        expiresIn: '20s'
    })

    return jwt
}

const verifyToken = async (jwt: string) => {
    const isOk = verify(jwt, secretToken)
    return isOk
}

interface JwtPayload {
    email: string;
}
const decodeToken = async (jwt: string) => {
    try {
        const decoded = verify(jwt, secretToken) as JwtPayload;
        return decoded['email'];
    } catch (err) {
        return null;
    }
}

export { signToken, verifyToken, decodeToken }