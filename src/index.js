const express = require('express')
const request = require('request')
const fs = require('fs')
const app = express()
const router = express.Router()
const port = process.env.PUBSUB_PORT || 5000

const API_KEY = process.env.REMOVE_BG_API_KEY

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

router.post('/remove', (req, res) => {
  if (!req.query.url) {
    return console.error('url not provided')
  }
  console.log(`url file received: ${req.query.url}`)
  request.post(
    {
      url: 'https://api.remove.bg/v1.0/removebg',
      formData: {
        image_url: req.query.url,
        size: 'auto'
      },
      headers: {
        'X-Api-Key': API_KEY
      },
      encoding: null
    },
    (error, response, body) => {
      if (error) {
        console.error(`Request failed: ${error}`)
        res.statusCode(500).send(error)
      }
      if (response.statusCode != 200) {
        console.error(`Error: ${response.statusCode}`, body.toString('utf8'))
        res.statusCode(response.statusCode).send({
          statusCode: response.statusCode,
          body: body.toString('utf8')
        })
      }
      console.log('Background removed')
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': body.length
      })
      res.end(body)
    }
  )
})

router.get('/health', (req, res) => {
  res.statusCode(200).send(`I'm healthy!`)
})

app.use(router)

console.log(`App listening on port ${port}`)
console.log(`REMOVE_BG_API_KEY: ${API_KEY}`)
app.listen(port)
