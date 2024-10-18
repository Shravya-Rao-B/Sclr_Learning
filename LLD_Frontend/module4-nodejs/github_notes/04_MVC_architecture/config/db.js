const mongoose = require("mongoose");

const dbURL = "mongodb+srv://shravyar8:mf2E6AT375EUNvxQ@cluster0.gyxysaw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// connect to DB.

const connectDb = async () => {
    try {
        await mongoose.connect(dbURL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Error: ", err);
    }

}

module.exports = connectDb;
