import mongoose from 'mongoose';


const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    }
})

export default mongoose.model('products', productSchema)