import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import { clearMessage } from './actions/message';
import Doctors from './components/Doctors';
import SideBar from './components/SideBar';
import Profile from './components/Profile';
import Doctor from './components/Doctor';
import NewAppointment from './components/NewAppointment';
import Appointments from './components/Appointments';
// import Appointment from './components/Appointment';

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
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/doctors/:id" component={Doctor} />
          <Route exact path="/appointments/new" component={NewAppointment} />
          <Route exact path="/appointments" component={Appointments} />
          {/* <Route exact path="/appointments/:id" component={Appointment} /> */}
        </Switch>
      </main>
    </div>
  );
};

export default App;
