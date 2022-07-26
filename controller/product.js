import ProductModel from '../model/product.js'


class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    async add(req, res) {

        let { title, pics, price, details } = req.body

        let newProduct = {
            title,
            pics,
            price,
            details
        }

        try {
            for (let key in newProduct) {
                if (newProduct[key] === undefined || null || '') {
                    throw new Error('商品信息有误')
                }
            }
        } catch (err) {
            console.log(err)
            res.send({
                status: -1,
                msg: '商品信息有误'
            })
            return
        }

        ProductModel.create(newProduct, () => {
            res.send({
                status: 0,
                msg: '接收添加商品请求'
            })
        })
    }
}

export default new Product();