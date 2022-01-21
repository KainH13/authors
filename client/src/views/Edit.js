import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

// components
import AuthorForm from "../components/AuthorForm";

const Edit = (props) => {
    const { id } = props;

    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data);
                setPerson(res.data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const updateProduct = (product) => {
        axios
            .put(`http://localhost:8000/api/authors/${id}`, product)
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
            <h1>Favorite Authors</h1>
            {loaded && (
                <AuthorForm
                    initialName={person.name}
                    onSubmitAction={updateProduct}
                    action="Edit"
                    errors={errors}
                />
            )}
        </div>
    );
};

export default Edit;
