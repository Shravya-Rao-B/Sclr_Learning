const mongoose = require('mongoose');
const dbURL = process.env.DB_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error: ", err);
    }

}

module.exports = connectDb;