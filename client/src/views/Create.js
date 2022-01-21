import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

// components
import AuthorForm from "../components/AuthorForm";

const Create = (props) => {
    const [errors, setErrors] = useState([]);

    const createProduct = (product) => {
        axios
            .post("http://localhost:8000/api/authors", product)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div>
            <h1>Favorite Authors</h1>
            <AuthorForm
                initialName=""
                onSubmitAction={createProduct}
                action="Add"
                errors={errors}
            />
        </div>
    );
};

export default Create;
