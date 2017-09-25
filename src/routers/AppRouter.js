import React from 'react';
// https://reacttraining.com/react-router/web/guides/philosophy
// Route - The Route component is perhaps the most important component in React Router to understand and learn to use well. Its most basic responsibility is to render some UI when a location matches the route’s path.
// BrowserRouter - A <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
// Switch - Renders the first child <Route> or <Redirect> that matches the location.
  // <Switch> is unique in that it renders a route exclusively. In contrast, every <Route> that matches the location renders inclusively.
// Link - Provides declarative, accessible navigation around your application.
// NavLink - A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import Header from '../components/Header.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      {/* Whenever user goes to "/" show the component ExpenseDashboardPage} */}
      <Switch>
        {/* ExpenseDashboardPage component shows only is exactly "/" */}
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        {/* if there is no match in the above routes "Switch" will have us take this last route the matches */}
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
