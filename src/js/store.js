
import {createStore, applyMiddleware } from "redux";
import {createLogger} from "redux-logger";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers';

const middleware = applyMiddleware(thunk, createLogger(), promise());
export default createStore(reducer, middleware);
