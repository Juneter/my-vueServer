import mongoose from 'mongoose'

const Schema = mongoose.Schema({
    seq_name: { type: String, require: true },
    seq_val: { type: Number, default: 0 }
})

const Counter = mongoose.model('counter', Schema)

Counter.findOne(function (err, data) {
    if (!data) {
        console.log('数据库进行初始化seq')

        const seqList = [
            { seq_name: 'admin' },
            { seq_name: 'product' }
        ]
        const init = Counter.create(seqList, (err, ...seqList) => {
            if (err) throw err
            console.log(...seqList)
        })

    }
})

export default Counter