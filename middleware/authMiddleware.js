import AccountService from "../services/AccountService";

export const authValidator = (req, res, next) => {
    const token = req.get('token');
    if (!token) {
        return res.status(400).json({ message: "token not present" });
    }

    const accountService = new AccountService();
    const account = accountService.findByAppSecret(token);

    if (!account) {
        return res.status(400).json({ message: "invalid token" });
    }

    req.account = account;

    next();
}