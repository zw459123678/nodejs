const express = require('express')
const app = express()
const config = require('./config')

app.get('/', (req, res) => res.send('Hello222!' + config.server))

app.listen(8500, () => console.log('Example app listening on port 8500!'))