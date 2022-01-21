import React from "react";
import { Router } from "@reach/router";

// views
import Home from "./views/Home";
import Create from "./views/Create";
import Edit from "./views/Edit";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Home path="/" />
                <Create path="/author/create" />
                <Edit path="/author/edit/:id" />
            </Router>
        </div>
    );
}

export default App;
