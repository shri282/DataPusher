import AccountService from "../../services/AccountService";

export const createAccountValidator = (req, res, next) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    next();
}

export const updateAccountValidator = (req, res, next) => {
    const accountId = req.body.accountId;
    if (!req.body.accountId) {
        return res.status(400).json({ error: 'account id not present' });
    }

    const accountService = new AccountService();
    const account = accountService.findOne(accountId);

    if (!account) {
        return res.status(400).json({ error: 'account does not exist' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }
}
