import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configurStore from './store/configurStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configurStore();




// store.dispatch(setTextFilter('water'));

// setTimeout (() =>{
//     store.dispatch(setTextFilter('bil'));
// }, 3000);

const state = store.getState();
// console.log('testing!');

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));