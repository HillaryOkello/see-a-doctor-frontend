import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from './store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AlertProvider template={AlertTemplate}>
        <App />
      </AlertProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
