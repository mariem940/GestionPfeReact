import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './screens/Home';
import Register from './components/pages/login/register';
import Login from './components/pages/login/login';

const Routes = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
