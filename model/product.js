import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    title: String,
    price: Number
});

const Product = mongoose.model('product', Schema);

export default Product