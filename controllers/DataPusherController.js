import DataPusherService from "../services/DataPusherService.js";

const dataPusherService = new DataPusherService();

export const pushData = async (req, res) => {
    try {
        await dataPusherService.pushData(req.account, req.body);
    } catch (error) {
        console.log(error);
        throw error;
    }
}