import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { TenderTofu } from "./components/TenderTofu.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TenderTofu />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)