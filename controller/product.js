import ProductModel from '../model/product.js'


class Product {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    async add(req, res){
        let { title, price} = req.body

        res.send({
            status: 0,
            msg: '接收添加商品请求'
        })
    }
}

export default new Product();