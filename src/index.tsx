import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './screens/App'
import { BrowserRouter } from 'react-router-dom'

import store from './store';

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('app')
)
