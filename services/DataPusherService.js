import axios from "axios";

class DataPusherService {

    async pushData(account, data = null) {

        for (let destination of account.destinations) {
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