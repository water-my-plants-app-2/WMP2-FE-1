import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import { UserReducer } from "./store/reducers/UserReducer.js";
// import logger from "redux-logger";
// let store;
// if (process.env.NODE_ENV === "development") {
//   store = createStore(UserReducer, applyMiddleware(thunk, logger));
// } else {
//   store = createStore(UserReducer, applyMiddleware(thunk));
// }


ReactDOM.render(
    // <Provider>
      <Router>
        <Route path="/" component={App} />
      </Router>
    // </Provider>
    ,document.getElementById("root")
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
