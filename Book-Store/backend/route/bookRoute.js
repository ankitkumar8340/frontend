import express from 'express';

import { getAllBooks } from '../controller/bookController.js';
import { searchExternalBooks } from '../controller/externalBookController.js';
const router = express.Router();
router.get('/', getAllBooks);
router.get('/search-api', searchExternalBooks);
export default router;




