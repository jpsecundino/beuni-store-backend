const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)


let PORT = 4000

// Get port via command line
process.argv.forEach(function (val, index, ) {
  if(val.startsWith("port")){
    PORT = val.split("port=")[1]
  }
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT)
})