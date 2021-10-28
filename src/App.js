import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import { clearMessage } from './actions/message';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch, location]);

  return (
    <div>
      <main>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
