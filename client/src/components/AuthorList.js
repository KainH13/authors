import React from "react";
import { Link } from "@reach/router";

const AuthorList = (props) => {
    const { authors, deleteAuthor } = props;

    return (
        <div className="card m-2 p-2">
            <h2>Authors:</h2>
            {authors.map((author, index) => {
                return (
                    <div className="card mx-1 my-2" key={index}>
                        <div className="card-body">
                            <h3 className="card-title">{author.name}</h3>
                            <Link
                                className="card-link btn btn-outline-warning mx-2"
                                to={`/author/edit/${author._id}`}
                            >
                                Edit
                            </Link>
                            <button
                                className="card-link btn btn-outline-danger mx-2"
                                onClick={() => deleteAuthor(author._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AuthorList;
