import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from "react-dom"
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";

import "./index.css";



//ReactDOM.render(<App/>, document.getElementById("root"));

render(<App/>, document.querySelector("#root"));


