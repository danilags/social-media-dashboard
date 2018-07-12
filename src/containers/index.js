import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import PageApp from './PageApp';
import HomePage from './HomePage';
import UserPage from './UserPage';
import UserDetails from './UserDetails';
import PostDetails from './PostDetails';
import RouteWithSubRoutes from './Route';

const routes = [
  {
    component: PageApp,
    routes: [
      {
        exact:true,
        path:'/',
        component: HomePage
      },
      {
        exact:true,
        path:'/users',
        component: UserPage
      },
      {
        exact:true,
        path:'/user/:id',
        component: UserDetails
      },
      {
        exact:true,
        path:'/post/:id',
        component: PostDetails
      },
    ]
  }
];

const AppRoute = () => (
	<Router>
		<div>
			{routes.map((route, i) => (
		 		<RouteWithSubRoutes key={i} {...route} text="Daniel Agus" />
			))}
		</div>
	</Router>
);

export default AppRoute;