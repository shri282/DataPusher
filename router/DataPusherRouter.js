import express from 'express';
import { pushData } from '../controllers/DataPusherController.js';
import { authValidator } from '../middleware/authMiddleware.js';

const dataPusherRouter = express.Router();

dataPusherRouter.post('/server/incoming_data', authValidator, pushData);

export default dataPusherRouter;