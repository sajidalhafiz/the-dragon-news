const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

const categories = require('./data/categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Reg is sent')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`The server is running from port: ${port}`)
})