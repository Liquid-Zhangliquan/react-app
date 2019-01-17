import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from '../pages/home/index';
import ReactMap from '../pages/react/index';


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
      key: 'react',
      route: {
        path: '/react',
        component: ReactMap
      }
    }
  ];
  
  const routes = (
    <Switch>
      {mainRouter.map((route) => <Route key={route.key} {...route.route} />)}
      <Redirect to="/home" />
    </Switch>
  );
  
  export default routes;