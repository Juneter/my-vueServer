import express from 'express';
import Base from '../controller/baseComponent.js';

const router = express.Router();

router.post('/upload/:type', Base.upload);

export default router;