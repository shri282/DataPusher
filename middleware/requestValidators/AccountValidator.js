import AccountService from "../../services/AccountService.js";

export const createAccountValidator = (req, res, next) => {
    const email = req.body.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    next();
}

export const updateAccountValidator = async (req, res, next) => {
    const accountId = req.body.accountId;
    if (!req.body.accountId) {
        return res.status(400).json({ error: 'account id not present' });
    }

    const accountService = new AccountService();
    const account = await accountService.findOne(accountId);

    if (!account) {
        return res.status(400).json({ error: 'account does not exist' });
    }

    const email = req.body.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    next();
}
