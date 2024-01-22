const express = require('express')
require('dotenv').config()
const port = process.env.PORT
const userRouter = require('./routes/user')
const app = express()
app.use(userRouter)

app.post('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})