import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


const EditExpensePage = (props) => {
  console.log(props);
  return(
    <div>
      Editing the expense with the id of {props.match.params.id}
    </div>
  );
}

export default EditExpensePage;
