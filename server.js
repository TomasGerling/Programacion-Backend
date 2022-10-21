const fs = require('fs')
const express = require("express")
const { response } = require('express')
const app = express()
const Contenedor = require('./actividad')
const Stock = require('./stock')


app.get('/', (_req, res) => {
    res.send({
        health:'Up',
        success: true
    })
})

app.get('/allProducts', async (_req, res) => {
    try {
        const getProducts = await Stock.getAll()
        res.status(200).send(getProducts)

    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
})

app.get('/randomProduct', async (_req, res) => {
    try {
        const getProducts = await Stock.getAll()
        const id = parseInt(Math.random() * getProducts.length)
        const Random = Stock.getByID(1)
        console.log(id);
        res.status(200).json(Random)


    } catch (err) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
})


const PORT = 8080

const service = app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
})

service.on('error', error => console.error(error))
