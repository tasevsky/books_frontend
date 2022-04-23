import React from 'react';
import BookTerm from '../BookTerm/bookTerm';
import {Link} from "react-router-dom";

class Books extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        /*const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.products.length / this.state.size);
        const products = this.getProductsPage(offset, nextPageOffset);
        console.log(products, pageCount)*/
        const books = this.getBooksPage();
        return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>Author</th>
                            <th scope={"col"}>Available Copies</th>
                        </tr>
                        </thead>
                        <tbody>
                        {books}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark my-2 my-sm-0"} to={"/books/add"}>Add new book</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    getBooksPage = () => {
        return this.props.books.map((term, index) => {
            return (
                <BookTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit} onTake={this.props.onTake}/>
            );
        })/*.filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })*/
    }

}

export default Books;
