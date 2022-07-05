import admin from './admin.js';
import product from './product.js';

export default app => {
    app.use('/admin', admin);
    app.use('/product', product);
}