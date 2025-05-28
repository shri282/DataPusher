import express from 'express';
import destinationController from '../controllers/DestinationController.js';

const { createDestination, deleteDestination, getDestination, getDestinations, updateDestination } = destinationController;
const destinationRouter = express.Router();

destinationRouter.get('/:destinationId', getDestination);
destinationRouter.get('/', getDestinations);
destinationRouter.post('/', createDestination);
destinationRouter.put('/', updateDestination);
destinationRouter.delete('/:destinationId', deleteDestination);

export default destinationRouter;