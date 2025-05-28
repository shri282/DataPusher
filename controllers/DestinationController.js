import DestinationService from "../services/DestinationService"

const destinationService = new DestinationService();

const getDestination = async (req, res) => {
    try {
        const destination = await destinationService.findOne(req.params.destinationId);
        return res.status(200).json(destination);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getDestinations = async (req, res) => {
    try {
        const destinations = await destinationService.findAll();
        return res.status(200).json(destinations);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const createDestination = async (req, res) => {
    try {
        const destination = await destinationService.create(req.body);
        return res.status(200).json(destination);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateDestination = async (req, res) => {
    try {
        const destination = await destinationService.update(req.body);
        return res.status(200).json(destination);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteDestination = async (req, res) => {
    try {
        const destinationId = req.params.destinationId;
        await destinationService.delete(destinationId);
        return res.status(200).json('destination successfully deleted');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    getDestination,
    getDestinations,
    updateDestination,
    deleteDestination,
    createDestination
}