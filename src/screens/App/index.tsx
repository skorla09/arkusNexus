import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core'
import routes from '../../config/routes'
import theme from '../../theme/materialTheme'
import UserDetails from '../UserDetails'
import Home from '../Home'

export const App = (props: any) => (
  <Switch>
    {routes.map((route, index) => (
      <Route key={index} path={route.path} component={route.component} />
    ))}
  </Switch>
);