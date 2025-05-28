import express from 'express';
import destinationController from '../controllers/DestinationController.js';
import { createDestinationValidator } from '../middleware/requestValidators/DestinationValidator.js';

const { createDestination, deleteDestination, getDestination, getDestinations, updateDestination } = destinationController;
const destinationRouter = express.Router();

destinationRouter.get('/:destinationId', getDestination);
destinationRouter.get('/', getDestinations);
destinationRouter.post('/', createDestinationValidator, createDestination);
destinationRouter.put('/', updateDestination);
destinationRouter.delete('/:destinationId', deleteDestination);

export default destinationRouter;