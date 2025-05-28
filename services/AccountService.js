import Account from "../models/Account.js";
import { randomUUID } from 'crypto'
import Destination from "../models/Destination.js";

class AccountService {

    async findOne(accountId) {
        return Account.findByPk(accountId, {
            include: [
              {
                model: Destination,
                as: 'destinations'
              }
            ]
        });
    }

    async findAll() {
        return Account.findAll();
    }

    async create(account) {
        return Account.create({
            accountName : account.accountName,
            email : account.email,
            appSecret : randomUUID()
        })
    }

    async update(account) {
        await Account.update({
            accountName : account.accountName,
            email : account.email,
            appSecret : randomUUID()
        }, {
            where: {
                accountId: account.accountId
            }
        });

        return Account.findByPk(account.accountId);
    }

    async delete(accountId) {
        return Account.destroy({
            where: {
                accountId
            }
        })
    }
}

export default AccountService;