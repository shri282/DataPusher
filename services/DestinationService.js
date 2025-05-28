import Destination from "../models/Destination";

class DestinationService {
    async findOne(destinationId) {
        return Destination.findByPk(destinationId);
    }

    async findAll() {
        return Destination.findAll();
    }

    async create(destination) {
        return Destination.create({
            accountId: destination.accountId,
            url: destination.url,
            httpMethod: destination.httpMethod,
            headers: destination.headers
        });
    }

    async update(destination) {
        await Destination.update({
            url: destination.url,
            httpMethod: destination.httpMethod,
            headers: destination.headers
        }, {
            where: {
                destinationId: destination.destinationId
            }
        });

        return Destination.findByPk(destination.destinationId);
    }

    async delete(destinationId) {
        return Destination.destroy({
            where: {
                destinationId
            }
        })
    }

    async findByAccountId(accountId) {
        return Destination.findAll({
            where: {
                accountId
            }
        })
    }
}

export default DestinationService;