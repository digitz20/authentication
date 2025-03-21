require('./config/database')
const express = require('express')


const PORT = process.env.port || 3048

const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')


const app = express()
app.use(express.json())

app.use('/api/v1/', userRouter)
app.use('/api/v1/', productRouter)


// Swagger

const swaggerJsdoc = require('swagger-jsdoc');
const swagger_ui = require('swagger-ui-express');

const options = {
   // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/documentation', swagger_ui.serve, swagger_ui.setup(openapiSpecification));




app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`)
})