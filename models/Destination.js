import sequelize from '../database/database.js';
import { DataTypes } from 'sequelize';
import Account from './Account.js';

const Destination = sequelize.define('Destination', {
    destinationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'destination_id'
    },
    accountId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'account_id',
        references: {
            model: Account,
            key: 'account_id'
        },
        onDelete: 'CASCADE'
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'url'
    },
    httpMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'http_method'
    },
    headers: {
        type: DataTypes.JSON,
        allowNull: false,
        field: 'headers'
    }
}, {
    tableName: 'destinations',
    timestamps: true
});

Account.hasMany(Destination, { foreignKey: 'account_id', as: 'destinations' });
Destination.belongsTo(Account, { foreignKey: 'account_id' });

export default Destination;