import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
console.log('test');
store.dispatch(addExpense({ description: 'car', amount: 3500}));
store.dispatch(addExpense({ description: 'car wash', createdAt: 1000}));
store.dispatch(addExpense({ description: 'dog wash', amount: 40000}));
store.dispatch(setTextFilter(''));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
