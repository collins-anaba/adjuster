import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';

const initialState = {}

export default createStore(reducer, applyMiddleware,compose)