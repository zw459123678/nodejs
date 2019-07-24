const express = require('express')
const app = express()

var server = 'server'

try{
    const config = require('./config')
    server = config.server
} catch(err) {

}

app.get('/', (req, res) => res.send('Hello222!' + server))

app.listen(8500, () => console.log('Example app listening on port 8500!'))