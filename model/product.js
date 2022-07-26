import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    title: String,
    pics: Array,
    price: Number,
    details: Array
});

const Product = mongoose.model('product', Schema);

export default Product