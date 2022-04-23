import React from 'react';
import BookTerm from '../BookTerm/bookTerm';
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            size: 5
        }

    }

    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);
        console.log(books, pageCount)
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
                                <Link className={"btn btn-block btn-dark my-2 my-sm-0"} to={"/books/add"}>Add new
                                    book</Link>
                            </div>
                        </div>
                    </div>
                    {/*<ReactPaginate previousLabel={"back"}
                                   nextLabel={"next"}
                                   breakLabel={<a href="/#">...</a>}
                                   breakClassName={"break-me"}
                                   pageClassName={"ml-1"}
                                   pageCount={pageCount}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   onPageChange={this.handlePageClick}
                                   containerClassName={"pagination m-4 justify-content-center"}
                                   activeClassName={"active"}/>*/}
                    <ReactPaginate
                        previousLabel="Previous"
                        nextLabel="Next"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        activeClassName="active"
                        containerClassName={"pagination m-4 justify-content-center"}
                    />
                </div>
            </div>
        )
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }


    getBooksPage = (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.books.map((term) => {
            return (
                <BookTerm term={term} onDelete={this.props.onDelete} onEdit={this.props.onEdit}
                          onTake={this.props.onTake}/>
            );
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

}

export default Books;
