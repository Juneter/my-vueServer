import mongoose from 'mongoose';
import config from '../config/config.js';

mongoose.connect(config.database,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},error => {
    if (error) {
        console.log('数据库连接出错');
        return
    }
    console.log('数据库连接成功');
});

const db = mongoose.connection;

db.on('close',()=>{
    console.log('数据库断开');
});

export default db