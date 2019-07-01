import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Work from 'Reactjs';
import App from './App'
import * as serviceWorker from './serviceWorker';
//import Table from "src/Table";



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
