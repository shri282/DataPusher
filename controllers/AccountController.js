import AccountService from "../services/AccountService.js"

const accountService = new AccountService();

const getAccount = async (req, res) => {
    try {
        const accountId = req.params.accountId;
        const account = await accountService.findOne(accountId);
        return res.status(200).json(account);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const getAccounts = async (req, res) => {
    try {
        const accounts = await accountService.findAll();
        return res.status(200).json(accounts);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const createAccount = async (req, res) => {
    try {
        const account = await accountService.create(req.body);
        return res.status(200).json(account);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateAccount = async (req, res) => {
    try {
        const account = await accountService.update(req.body);
        return res.status(200).json(account);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const deleteAccount = async (req, res) => {
    try {
        const accountId = req.params.accountId;
        await accountService.delete(accountId);
        return res.status(200).json('account successfully deleted');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default {
    getAccount,
    getAccounts,
    createAccount,
    updateAccount,
    deleteAccount
}