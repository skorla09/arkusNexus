import React from 'react'
import Home from '../screens/Home'
import UserDetails from '../screens/UserDetails';

const routes = [
  {
    path: '/details',
    name: 'details',
    component: UserDetails
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

export default routes