// import bookModel from "./../model/schema.js";

// export const getbooks = async (req, res) => {
//     const books = await bookModel.find();
//     res.json(books);
// };

// export const createbooks = async (req, res) => {
//     const { title, author, imageLink } = req.body;
//     const book = new bookModel({ title, author, imageLink: req.body.imageLink });
//     await book.save();
//     res.status(200).json(book);
// };

// export const updatebook = async (req, res) => {
//     try {
//         const bookId = req.params.id;
//         const updatedBookData = req.body;

//         const updatedBook = await bookModel.findByIdAndUpdate( // Corrected line
//             bookId,
//             updatedBookData,
//             { new: true }
//         );

//         if (!updatedBook) {
//             return res.status(404).json({ message: 'Book not found' });
//         }

//         res.json(updatedBook);
//     } catch (error) {
//         console.error('Error updating book:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// export const deletebook = async (req, res) => {
//     await bookModel.findByIdAndDelete(req.params.id);
//     res.json({ message: "book deleted" });
// };

import bookModel from "./../model/schema.js";

export const getbooks = async (req, res) => {
    const books = await bookModel.find();
    res.json(books);
}; 

export const createbooks = async (req, res) => {
    const { title, author, imageLink } = req.body;
    const book = new bookModel({ title, author, imageLink: req.body.imageLink });
    await book.save();
    res.status(200).json(book);
};

export const updatebook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const updatedBookData = req.body;

        const updatedBook = await bookModel.findByIdAndUpdate(
            bookId,
            updatedBookData,
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.json(updatedBook);
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const deletebook = async (req, res) => {
    await bookModel.findByIdAndDelete(req.params.id);
    res.json({ message: "book deleted" });
};