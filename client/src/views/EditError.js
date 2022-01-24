import React from "react";
import { Link } from "@reach/router";

const EditError = (props) => {
    return (
        <div>
            <h1 className="text-center">Error: Not a user</h1>
            <div className="alert alert-danger m-2">
                <p>
                    There is no user with that ID. Would you like to create a
                    user?
                </p>
                <Link to="/author/create" className="btn btn-outline-primary">
                    Create User
                </Link>
            </div>
        </div>
    );
};

export default EditError;
