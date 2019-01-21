import React, { Suspense } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from '../pages/home/index';
import Login from '../pages/login/index'
import Register from '../pages/register/index'
import Findpassword from '../pages/findpassword/index'

// const Home = lazy(() => import('../pages/home/index'));
// const Login = lazy(() => import('../pages/login/index'));
// Warning: Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`.

// const mainRouter = [
//   {
//     name: '主页',
//     key: 'home',
//     route: {
//       path: '/home',
//       component: Home
//     }
//   },
//   {
//     name: '登录',
//     key: 'login',
//     route: {
//       path: '/login',
//       component: Login
//     }
//   }
// ];

const routes = (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {/* {mainRouter.map((route) => <Route key={route.key} {...route.route} />)} */}
      <HashRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/findpassword" component={Findpassword} />
          <Route path="/home" component={Home} />
        </div>
      </HashRouter>
    </Switch>
  </Suspense>
);

export default routes;