import express from 'express';
import accountController from '../controllers/AccountController.js';
import { createAccountValidator, updateAccountValidator } from '../middleware/requestValidators/AccountValidator.js';

const { createAccount, deleteAccount, getAccount, getAccounts, updateAccount } = accountController
const accountRouter = express.Router();

accountRouter.get('/', getAccounts);
accountRouter.get('/:accountId', getAccount);
accountRouter.post('/', createAccountValidator, createAccount);
accountRouter.put('/', updateAccountValidator, updateAccount);
accountRouter.delete('/:accountId', deleteAccount);

export default accountRouter;
