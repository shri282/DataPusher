import DataPusherService from "../services/DataPusherService.js";

const dataPusherService = new DataPusherService();

export const pushData = async (req, res) => {
    try {
        await dataPusherService.pushData(req.account, req.body);
        return res.status(200).json({ message: 'data pushed successfully' });
    } catch (error) {
        console.log(error);
        throw error;
    }
}