import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './containers/Register';
import Login from './containers/Login';
import { clearMessage } from './actions/message';
import Doctors from './containers/Doctors';
import SideBar from './components/SideBar';
import Doctor from './containers/Doctor';
import NewAppointment from './containers/NewAppointment';
import Appointments from './containers/Appointments';
import Appointment from './containers/Appointment';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch, location]);

  return (
    <div>
      <SideBar />
      <main>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/doctors" component={Doctors} />
          <Route exact path="/doctors/:id" component={Doctor} />
          <Route exact path="/appointments/new" component={NewAppointment} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/appointments/:id" component={Appointment} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
