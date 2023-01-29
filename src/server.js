const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.get('/', (req, res) => {
  res.send('Hello World')
})


const PORT = 3001
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})