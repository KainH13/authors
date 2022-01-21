import React, { useState } from "react";
import { Link } from "@reach/router";

// components

const AuthorForm = (props) => {
    const { initialName, onSubmitAction, errors } = props;

    // store for form values
    const [name, setName] = useState(initialName);

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitAction({ name });
    };

    return (
        <div className="border rounded p-2 m-5">
            <h2 className="text-center">Add an author</h2>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    {errors.name ? (
                        <div className="alert alert-danger my-1">
                            {errors.name.message}
                        </div>
                    ) : null}
                </div>

                <Link className="btn btn-outline-primary" to="/">
                    Cancel
                </Link>
                <button type="submit" className="btn btn-outline-primary mx-2">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AuthorForm;
