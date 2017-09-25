import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    {/* this will use client side routing rather than an "href" that would use server side routing */}
    404 - <Link to="/">Go Home</Link>
  </div>
);

export default NotFoundPage;
