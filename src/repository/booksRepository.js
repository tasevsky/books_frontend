import axios from '../custom-axios/axios';

const BooksService = {
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    deleteBook: (id) => {
        return axios.delete(`/delete/${id}`);
    },
    addBook: (name, category, author, availableCopies) => {
        return axios.post("/add", {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies": availableCopies
        });
    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/edit/${id}`, {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies": availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/${id}`);
    },
    takeBook: (id) => {
        return axios.put(`/take/${id}`);
    }
}

export default BooksService;
