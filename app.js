const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello222!'))

app.listen(8500, () => console.log('Example app listening on port 8500!'))