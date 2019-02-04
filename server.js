const express = require('express')
const app = express()
const port = process.env.PORT || 3002
const dotenv = require('dotenv').config()
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)
const cors = require('cors')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => {
    knex('questions')
        .then((rows) => {
            res.send(rows)
        })
        .catch((err) => {
            next(err)
        })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

app.post('/comments', (req, res, next) => {
    knex('comments').insert(req.body)
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            next(err)
        })
})

//update whole wallaby:
app.put('/comments/:id', (req, res, next) => {
    console.log('req.body', req.body)
    knex('comments').update(req.body).where('id', req.params.id).returning('*')
        .then((rows) => {
            res.send(rows);
        })
        .catch((err) => {
            next(err)
        })
})

//delete:
app.delete('/comments/:id', (req, res, next) => {
    knex('comments').where('id', req.params.id).del()
        .then((data) => {
            res.status(200).send({
                message: 'success',
                data: data
            })
        })
        .catch((err) => {
            next(err)
        })
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('something broke!')
})
app.use(function (err, req, res, next) {

    res.status(404).send('Sorry, cannot find that!')
})

