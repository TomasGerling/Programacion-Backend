const router = require('express').Router()

const products = require('./products/products.router')

router.use('/products', products)

module.exports = router
