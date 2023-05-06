import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/user.interface'

/* Se declara el Schema: El esquema es la representacion de las propiedades que se 
van a guardar en la base de datos */
const UserSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            default: function () {
                return this.username;
            }
        },
        username: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: String,
            default: 'ACTIVE',
            enum: ['ACTIVE', 'INACTIVE']
        },
        verified: {
            type: Boolean,
            default: false,
        },
        profile_image: {
            type: String,
            default: ''
        },
        bio: {
            type: String,
            default: ''
        },
        location: {
            type: String,
            default: ''
        }
    },
    {
        timestamps: true, // Para que guarde la fecha de creacion y actualizacion
        versionKey: false // Para que no guarde datos por version
    }
)

// Implementamos el Schema en el modelo
const UserModel = model('users', UserSchema)
export default UserModel