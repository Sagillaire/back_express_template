import 'dotenv/config' // Importamos dotenv para hacer uso de las variables de entorno
import mongoose, { connect } from 'mongoose' // Se usa mongoose para gestionar la conexion con mongo
import { downConnection, readyConnection } from '../utils/dbConsoleStart';

mongoose.set('strictQuery', false); // Para eliminar advertencias en consola

(async (): Promise<void> => {
    try {
        const DB_URI = <string>process.env.DB_URI // Se obtiene la DB_URI del .env
        await connect(DB_URI) // Se inicializa la conecion con la base de datos
        console.log(readyConnection)
    } catch (err) { console.log(downConnection) }
})()