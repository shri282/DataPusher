import AccountService from "./AccountService.js";
import axios from "axios";

class DataPusherService {

    async pushData(account, data = null) {
        const accountService = new AccountService();
        const account = await accountService.findOne(account.accountId);

        for (let destination of account.destination) {
            const { url, httpMethod, headers } = destination;

            // send as body
            if (['POST', 'PUT'].includes(httpMethod)) {
                await axios.request({
                    url,
                    method: httpMethod,
                    data,
                    headers
                })

                continue;
            }

            // send as query params
            await axios.request({
                url,
                method: httpMethod,
                params: data,
                headers
            })
        }
    }

}


export default DataPusherService;