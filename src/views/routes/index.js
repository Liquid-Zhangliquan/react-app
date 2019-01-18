import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from '../pages/home/index';
import Login from '../pages/login/index';


const mainRouter = [
    {
      name: '主页',
      key: 'home',
      route: {
        path: '/home',
        component: Home
      }
    },
    {
      name: '图层',
      key: 'login',
      route: {
        path: '/login',
        component: Login
      }
    }
  ];
  
  const routes = (
    <Switch>
      {mainRouter.map((route) => <Route key={route.key} {...route.route} />)}
      <Redirect to="/login" />
    </Switch>
  );
  
  export default routes;