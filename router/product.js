import express from 'express'
import Product from '../controller/product.js'

const router = express.Router();

router.post('/addPro', Product.add)

export default router;