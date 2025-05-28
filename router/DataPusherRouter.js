import express from 'express';
import { pushData } from '../controllers/DataPusherController.js';

const dataPusherRouter = express.Router();

dataPusherRouter.post('/server/incoming_data', pushData);

export default dataPusherRouter;