import React from 'react';
// import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseList/>
    <ExpenseListItem/>
  </div>
);

export default ExpenseDashboardPage;
