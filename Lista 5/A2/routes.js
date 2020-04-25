const express = require('express')
const routes = express.Router()

let valor = 0

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/2.html')
})

routes.get('/result2', (req, res) => {
    let { n1, n2 } = req.query
    valor = n1 - n2
    res.send(n1 + "-" + n2 + ":" + valor)
})
routes.post('/result2', (req, res) => {
    let { n1, n2 } = req.body
    valor = parseInt(n1) + parseInt(n2)
    res.send(n1 + "+" + n2 + ":" + valor)
})

module.exports = routes