import sequelize from '../database/database.js'
import { DataTypes } from 'sequelize';

const Account = sequelize.define('Accounts', {
    accountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'account_id'
    },
    email: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'email'
    },
    accountName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'account_name'
    },
    appSecret: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'app_secret'
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'notifyCreated'
    },
},
{
    tableName: 'accounts',
    timestamps: false
}
);

export default Account;