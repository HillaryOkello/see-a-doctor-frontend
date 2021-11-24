import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch, Route,
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
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  return (
    <div>
      <SideBar />
      <main>
        <Switch>
          <Route exact id="Home" path={['/', '/home']} component={Home} />
          <Route exact id="Login" path="/login" component={Login} />
          <Route exact id="Register" path="/register" component={Register} />
          <Route exact id="Doctors" path="/doctors" component={Doctors} />
          <Route exact id="Doctor" path="/doctors/:id" component={Doctor} />
          <Route exact id="NewAppointment" path="/appointments/new" component={NewAppointment} />
          <Route exact id="Appointments" path="/appointments" component={Appointments} />
          <Route exact id="Appointment" path="/appointments/:id" component={Appointment} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
