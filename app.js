import express from 'express';
import accountRouter from './router/accountRouter.js';
import sequelize from './database/database.js';
import destinationRouter from './router/DestinationRouter.js';
const app = express();

app.use(express.json());
await sequelize.sync({ force: true })

app.use("/api/accounts", accountRouter);
app.use("/api/destinations", destinationRouter);

app.listen(5000, () => {
    console.log(`server started on port localhost port 5000....`);
});