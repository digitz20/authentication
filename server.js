require('./config/database')
const express = require('express')


const PORT = process.env.port || 3048

const userRouter = require('./routes/userRouter')


const app = express()
app.use(express.json())

app.use('/api/v1/', userRouter)

app.listen(PORT, () => {
    console.log(`server is listening to port ${PORT}`)
})