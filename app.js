import express from 'express';
import Account from './models/Account.js';
// import sequelize from './database/database.js';
const app = express();

// await sequelize.sync({ force: false })

app.get('/helloworld', async (req, res) => {
    try {
        const accs = await Account.findAll()
        res.send('helloworld '+ JSON.stringify(accs));
    } catch (error) {
        res.send('helloworld '+ JSON.stringify(error.message));
    }
    
})

const server = app.listen(5000, () => {
    console.log(`server started on port localhost port 5000....`);
});