import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

// components
import AuthorForm from "../components/AuthorForm";

const Edit = (props) => {
    const { id } = props;

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err);
                navigate("/author/edit/error")
            });
    }, []);

    const updateAuthor = (author) => {
        axios
            .put(`http://localhost:8000/api/authors/${id}`, author)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <h1 className="text-center">Favorite Authors</h1>
                <AuthorForm
                    name={name}
                    setName={setName}
                    onSubmitAction={updateAuthor}
                    action="Edit"
                    errors={errors}
                />
        </div>
    );
};

export default Edit;
