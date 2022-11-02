const express = require('express')
    const {
    ProductNotFoundException,
    ProductEmptyEntity,
    } = require('../../exceptions')
    const productService = require('../../services/products.service')

    const router = express.Router()

    router.use((req, res, next) => {
    req.service = productService
    next()
    })

    router.get('/', (req, res) => {
    const data = req.service.getAll()
    res.status(200).json({ data })
    })

    router.get('/:id', (req, res) => {
    const { id } = req.params
    const product = req.service.getById(id)
    res.status(200).json({ data: product })
    })

    router.post('/', (req, res) => {
    const product = req.body
    if (Object.entries(product).length === 0)
        throw new ProductEmptyEntity()

    const created = req.service.create(product)
    res.redirect('/')
    })

    router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body
    if (Object.entries(changes).length === 0)
        throw new ProductEmptyEntity()

    req.service.putById(id, changes)
    res.status(204).send()
    })

    router.delete('/:id', (req, res) => {
    const { id } = req.params
    req.service.deleteById(id)
    res.status(204).send()
    })

module.exports = router
