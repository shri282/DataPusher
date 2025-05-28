import express from 'express';
import accountController from '../controllers/AccountController.js';

const { createAccount, deleteAccount, getAccount, getAccounts, updateAccount } = accountController
const accountRouter = express.Router();

accountRouter.get('/', getAccounts);
accountRouter.get('/:accountId', getAccount);
accountRouter.post('/', createAccount);
accountRouter.put('/', updateAccount);
accountRouter.delete('/:accountId', deleteAccount);

export default accountRouter;
