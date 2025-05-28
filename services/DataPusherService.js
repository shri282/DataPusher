import AccountService from "./AccountService";

class DataPusherService {

    async pushData(accountId, data = null) {
        const accountService = new AccountService();
        const account = await accountService.findOne(accountId);

        for (let destination of account.destination) {
            
        }
    }

}