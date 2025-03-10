import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    author: { type: String, required: true },
    // category: {type: String, required: true},
    imageLink: { type: String, required: true },
    // description: {type: String, required: true}
});

const bookModel = mongoose.model('Book', bookSchema);
export default bookModel;
