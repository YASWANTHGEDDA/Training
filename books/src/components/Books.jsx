import React, { useState, useEffect } from "react";
import { fetchBooks, createBook, updateBook, deleteBook } from "./../api";
import "./../components/books.css"


function Books() {
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    imageLink: "",
  });
  const [editBook, setEditBook] = useState(null);

  useEffect(() => {
    const fetchDatabaseBooks = fetchBooks()
      .then((data) => data.map((book) => ({ ...book, source: "database" })))
      .catch((error) => {
        console.error("Error fetching database books:", error);
        return [];
      });

    const fetchJsonBooks = fetch("/books.json")
      .then((response) => response.json())
      .then((data) => data.map((book) => ({ ...book, source: "json" })))
      .catch((error) => {
        console.error("Error fetching JSON books:", error);
        return [];
      });

    Promise.all([fetchDatabaseBooks, fetchJsonBooks]).then((results) => {
      const combinedBooks = results.flat();
      setBooks(combinedBooks);
    });
  }, []);

  const handleAddClick = () => {
    setShowForm(!showForm);
    setEditBook(null);
    setNewBook({ title: "", author: "", imageLink: "" });
  };

  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.id]: e.target.value });
  };

  const handleCreateBook = async () => {
    if (newBook.title && newBook.imageLink) {
      try {
        let responseData;
        if (editBook) {
          responseData = await updateBook(editBook._id, newBook);
          setBooks((prevBooks) =>
            prevBooks.map((book) =>
              book._id === editBook._id && book.source === "database"
                ? { ...responseData, source: "database" }
                : book
            )
          );
        } else {
          responseData = await createBook(newBook);
          setBooks((prevBooks) => [
            ...prevBooks,
            { ...responseData, source: "database" },
          ]);
        }
        setShowForm(false);
        setNewBook({ title: "", author: "", imageLink: "" });
      } catch (error) {
        console.error("Error in create/update:", error);
      }
    }
  };

  const handleDeleteBook = async (book) => {
    if (book.source === "database") {
      try {
        await deleteBook(book._id);
        setBooks((prevBooks) => prevBooks.filter((b) => b._id !== book._id));
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    } else if (book.source === "json") {
      setBooks((prevBooks) =>
        prevBooks.filter(
          (b) => !(b.title === book.title && b.source === "json")
        )
      );
    }
  };

  const handleUpdateBook = (book) => {
    setEditBook(book);
    setNewBook({ ...book });
    setShowForm(true);
  };

  return (
    <div className="container mt-5">
      <button onClick={handleAddClick} className="btn btn-success mb-3">
        {editBook ? "Update Book" : "Add Book"}
      </button>
      {showForm && (
        <form>
          <input
            id="title"
            className="form-control"
            placeholder="Title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <input
            id="author"
            className="form-control"
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <input
            id="imageLink"
            className="form-control"
            placeholder="Image URL"
            value={newBook.imageLink}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleCreateBook}>
            {editBook ? "Update" : "Create"}
          </button>
        </form>
      )}
      <div className="row" id="cont">
        {books.map((book, index) => (
          <div
            className="col-md-3 book-list"
            key={`${book.title}-${book.source}-${index}`}
          >
            <div className="card mb-3 book-card">
              <img
                src={book.imageLink}
                className="card-img-top"
                alt={book.title}
              />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.author}</p>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleUpdateBook(book)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteBook(book)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
