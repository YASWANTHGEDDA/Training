import express from 'express';
import multer from 'multer';
import { getbooks, createbooks, updatebook,deletebook } from '../controllers/bookColl.js';
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.route('/').get(getbooks).post(createbooks);
router.route('/:id').put(updatebook).delete(deletebook);
export default router;