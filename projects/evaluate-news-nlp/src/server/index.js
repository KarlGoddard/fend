const dotenv = require('dotenv')
dotenv.config()
const apikey = process.env.API_KEY

var path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const express = require('express')

const app = express()
app.use(express.static('dist'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`)

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081')
})

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/tbc', async (req, res)=> {
  const apicall = `https://api.meaningcloud.com/sentiment-2.1?key=${apikey}&of=json&lang=auto&txt=${req.body}`;
  const getinfo = async (apicall) => {
    try {
      let data = await.response.json();
      return data;
    } catch (error) {
      console.log("error:" error);
    }
  }}
);
