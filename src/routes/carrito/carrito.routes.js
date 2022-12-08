import express from "express";
import { v4 as uuidv4 } from 'uuid';
import _ from "lodash"
import CarritoNacional from '../../services/carrito/carrito.service.js'


const router = express.Router();
const carritoNac = new CarritoNacional();



router.post('/', async (req, res, next) => {
    try {
        const { body } = req;
        if (_.isNil(body)) (res.status(404).json({ success: false, message: "REQ ERROR Body missing" }));
        Object.assign(body, {
            id: uuidv4()
        });
        const data = await carritoNac.createCarrito(body);
        if (!data.success) (res.status(500).json(data))
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
})

router.get('/:carritouuid/products', async (req, res, next) => {
    try {
        const { carritouuid } = req.params;
        if (_.isNil(carritouuid)) (res.status(400).json({ success: false, message: "req error" }));
        const data = await carritoNac.getCarrito(carritouuid)
        if (!data.success) (res.status(500).json(data))
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
});





router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        if (_.isNil(id)) (res.status(400).json({ success: false, message: "req error" }));
        const data = await carritoNac.deleteCarrito(id)
        if (!data.success) (res.status(500).json(data))
        res.status(200).json(data);
    } catch (err) {
        next(err)
    }
});




router.post('/:id/productos/:prod_id', async (req, res, next) => {
    try {
        const { id, prod_id } = req.params
        if (_.isNil(id) || _.isNil(prod_id)) {
            return res.status(400).json({
                success: false,
                message: 'Req error'
            })
        }

        const data = await carrito.setNewProduct(id, prod_id)

        if (!data.success) return res.status(400).json(data)
        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id/productos/:prod_id', async (req, res, next) => {
    try {
        const { id, prod_id } = req.params
        if (_.isNil(id) || _.isNil(prod_id)) {
            return res.status(400).json({
                success: false,
                message: 'req error'
            })
        }

        const data = await carrito.deleteProduct(id, prod_id)

        if (!data.success) return res.status(400).json(data)
        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})


export default router;
