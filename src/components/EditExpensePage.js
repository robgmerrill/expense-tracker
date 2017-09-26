import React from 'react';
// import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
  return(
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          // Dispatch the action to edit the expense
          // redirect to the dashboard
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)

  };
};

export default connect(mapStateToProps)(EditExpensePage);
