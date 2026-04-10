const mongoose = require("mongoose")

function connectToDB(){
    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is missing in environment variables")
    }

    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("connected to DB");
    })
}

module.exports = connectToDB