import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    id: { type: Number, required: true, default: 0 },
    title: String,
    pics: Array,
    price: Number,
    details: Array,
    seq_value: { type: Number, default: 0 },
    seq_name: { type: String, default: 'products' }
});

const Product = mongoose.model('product', Schema);

export default Product