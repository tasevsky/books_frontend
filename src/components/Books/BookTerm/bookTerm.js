import React from 'react';
import {Link} from "react-router-dom";

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <Link title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </Link>
                <Link className={"btn btn-info ms-3"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <Link className={"btn btn-warning ms-3"}
                      onClick={() => props.onTake(props.term.id)}
                      >
                    Take Book
                </Link>
            </td>
        </tr>
    )
}

export default bookTerm;
