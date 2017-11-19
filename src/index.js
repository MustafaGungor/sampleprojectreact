import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./app/MainPage";
import {HashRouter} from 'react-router-dom'
const app = document.getElementById("app");


ReactDOM.render(<HashRouter ><MainPage/></HashRouter>, app);