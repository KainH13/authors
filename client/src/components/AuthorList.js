import React from "react";
import { Link } from "@reach/router";

const AuthorList = (props) => {
    const { authors, deleteAuthor } = props;

    return (
        <div>
            {authors.map((author, index) => {
                return (
                    <div className="card mx-5 my-2" key={index}>
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
                                onClick={deleteAuthor}
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
