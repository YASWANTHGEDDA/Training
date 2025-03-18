const mongoose = require("mongoose");

const db = async () => {
    const dbName = "TaskList"
    mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
    console.log('db is connected');
    
}

module.exports = db;