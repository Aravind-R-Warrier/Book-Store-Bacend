import express from "express"
import { PORT, mongoDbUrl } from "./config.js"
import mongoose from "mongoose";
import bookRoute from './routes/bookRoute.js'
import cors from 'cors'


const app = express()

//middleware for parsing
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('welcome to mern')
})
app.use('/books',bookRoute)


mongoose.connect(mongoDbUrl).then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
        console.log(`your server running on port ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})