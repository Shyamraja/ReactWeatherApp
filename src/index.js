import React from 'react';
import ReactDom from 'react-dom'
import "./App.css";
import App from './App';

//const reactTarget = document.getElementById("react-target");
import * as serviceWorker from './serviceWorker';
//import serviceworker from './Serviceworker';
ReactDom.render(<App />, document.getElementById("root"));

console.log("webpack bundle works");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
