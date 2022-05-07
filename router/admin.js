import express from 'express';
import Admin from '../controller/admin.js';

const router = express.Router();

router.post('/login', Admin.login);
// router.get('/logout', Admin.logout);

export default router;

