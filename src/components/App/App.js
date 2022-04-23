import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Header from '../Header/header';
import Categories from '../Categories/categories';
import Books from '../Books/BookList/books'
import BooksService from "../../repository/booksRepository";
import BookAdd from "../Books/BookAdd/BookAdd";
import BookEdit from "../Books/BookEdit/BookEdit";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            countries: [],
            authors: [],
            selectedBook: {}
        }
    }


    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Route path={"/categories"} exact render={() =>
                            <Categories categories={this.state.categories}/>}/>
                        <Route path={"/books"} exact render={() =>
                            <Books books={this.state.books}
                                   onDelete={this.deleteBook}
                                   onEdit={this.getBook}
                                   onTake={this.takeBook}
                            />}/>
                        <Route path={"/books/add"} exact render={() =>
                            <BookAdd categories={this.state.categories}
                                     authors={this.state.authors}
                                     onAddBook={this.addBook}/>}/>
                        <Route path={"/books/edit/:id"} exact render={() =>
                            <BookEdit categories={this.state.categories}
                                      authors={this.state.authors}
                                      book={this.state.selectedBook}
                                      onEditBook={this.editBook}/>}/>
                        <Redirect to={"/books"}/>
                    </div>
                </main>
            </Router>
        )
    };

    componentDidMount() {
        this.loadBooks()
        this.loadCategories()
        this.loadAuthors()
    }

    loadBooks = () => {
        BooksService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadCategories = () => {
        BooksService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    loadAuthors = () => {
        BooksService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });

    }

    getBook = (id) => {
        BooksService.getBook(id).then((data) => {
            this.setState({
                selectedBook: data.data
            })
        });
    }

    takeBook = (id) => {
        BooksService.takeBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    deleteBook = (id) => {
        BooksService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    addBook = (name, category, author, availableCopies) => {
        BooksService.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    editBook = (id, name, category, author, availableCopies) => {
        BooksService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

}

export default App;
