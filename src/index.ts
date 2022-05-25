import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import {productsRouter} from "./routes/products-router";
import {adressesRouter} from "./routes/adresses-router";

// create express app
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)






app.use('/products', productsRouter)
app.use('/adresses', adressesRouter)

// start app
app.listen(port, () => {
    console.log('Example app listening on port: ${port}')
})