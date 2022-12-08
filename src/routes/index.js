import express  from 'express'
import productRoutes from './products/products.routes.js'
import cartRoutes from '../routes/carrito/carrito.routes.js'


const  router = express.Router();
router.get('/health', async (_req, res) => {
    res.status(200).json({
        success: true,
        environment: process.env.ENVIRONMENT || 'undefined',
        health: 'Up!'
    })
})

.use('/products', productRoutes)
.use('/carrito', cartRoutes)
export default router;