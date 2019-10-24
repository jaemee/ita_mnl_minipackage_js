import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Booking from './container/bookingContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import BkgReducer from './components/reducer/bkgReducer'
import * as serviceWorker from './serviceWorker';

let store = createStore(
    BkgReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
    <Provider store={store}>
        <Booking />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
