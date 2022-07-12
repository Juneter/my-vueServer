import admin from './admin.js';
import product from './product.js';
import base from './base.js';

export default app => {
    app.use('/admin', admin);
    app.use('/product', product);
    app.use('/base', base);
}