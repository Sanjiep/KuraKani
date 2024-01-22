const express = require('express')
const app = express()
require('dotenv').config()
const connection = require('./db/connection')
const userRouter = require('./routes/user')

const port = process.env.PORT

app.use(express.json())
app.use(userRouter)

connection()

app.post('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})