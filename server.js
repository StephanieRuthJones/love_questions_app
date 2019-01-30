const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const knex = require('./knex')

app.get('/', (req, res, next) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
