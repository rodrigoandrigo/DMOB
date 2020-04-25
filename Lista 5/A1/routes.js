const express = require('express')
const routes = express.Router()

let valor = 0

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/1.html')
})

routes.post('/result', (req, res) => {
    d1 = req.body
    c = Object.values(d1).reduce((e, i) => {
        val1 = parseInt(e)
        val2 = parseInt(i)
        return total = val1 + val2
    })
    valor = c
    res.redirect('/result')
})

routes.get('/result', (req, res) => {
    res.send("valor: " + valor)
})

module.exports = routes