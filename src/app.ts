import 'dotenv/config'
import './config/mongo'
import cors from 'cors'
import morgan from 'morgan'
import express from 'express'
import { routes } from './routes'

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`Server running => http://localhost:${PORT}`)
})