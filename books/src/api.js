import axios from 'axios';

const API_BASE_URL = 'http://localhost:9090/api/books';

export const fetchBooks = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
}; 

export const createBook = async (book) => {
    try {
        const response = await axios.post(API_BASE_URL, book);
        return response.data;
    } catch (error) {
        console.error('Error creating book:', error);
        throw error;
    }
};

export const updateBook = async (id, book) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/${id}`, book);
        return response.data;
    } catch (error) {
        console.error('Error updating book:', error);
        throw error;
    }
};

export const deleteBook = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
};