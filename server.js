
const express = require('express')
const app = express()
var port = 4000
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

// app.use('/', express.static('../app/WebPage/index.html', {
//   index: "index.html"
// }))
// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })

app.get('/', (req, res) =>{
  console.log('hiii')
  res.send()

})

app.post('/',  (req, res) => {
  res.send('Got a POST request')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))