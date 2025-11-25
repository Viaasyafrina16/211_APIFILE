const db = require('../models');

async function connectDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log('Database Connection  successfully');

        await db.sequelize.sync({ alter: true });
        console.log('Database synchronize ');

    } catch (error) {
        console.error(' Database connection failed:', err.message);
        process.exit(1);
    }
}

module.exports = { connectDatabase };