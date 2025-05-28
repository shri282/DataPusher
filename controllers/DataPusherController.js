import DataPusherService from "../services/DataPusherService";

const dataPusherService = new DataPusherService();

export const pushData = async (req, res) => {
    try {
        await dataPusherService.pushData(req.accountId, req.body);
    } catch (error) {
        console.log(error);
        throw error;
    }
}