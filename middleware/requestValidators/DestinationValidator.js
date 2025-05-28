import AccountService from "../../services/AccountService.js";

export const createDestinationValidator = async (req, res, next) => {
    const { accountId, httpMethod } = req.body;

    if (!accountId) {
        return res.status(400).json({ error: 'account id not present' });
    }

    if (!['GET', 'PUT', 'POST', 'DELETE'].includes(httpMethod)) {
        return res.status(400).json({ error: 'invalid http method' });
    }

    const accountService = new AccountService();
    const account = await accountService.findOne(accountId);

    if (!account) {
        return res.status(400).json({ error: 'account does not exist' });
    }

    next();
}