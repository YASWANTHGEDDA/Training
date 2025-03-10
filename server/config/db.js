import mongoose from "mongoose";
const db = () => {
  const dnName = "BooksStore";
  mongoose.connect(`mongodb://127.0.0.1:27017/${dnName}`)
    console.log("Database is connected to Books store");
};
export default db;