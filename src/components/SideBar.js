import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SocialIcons from './SocialIcons';
import { logout } from '../actions/auth';
// import logo from '../assets/images/logo.png';
import classes from '../styles/SideBar.module.css';

const SideBar = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  const toggleMenu = () => {
    const navMenu = document.querySelector('nav');
    navMenu.classList.toggle(classes.toggle);
  };

  return (
    <div>
      <button type="button" className={classes.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </button>
      <nav className={`${classes.sidenav} ${classes.toggle}`}>
        <NavLink exact to="/">
          {/* <img src={logo} alt="logo" className={classes.logo} /> */}
          <h2 className={classes.logo}>Hilnex Hospital</h2>
        </NavLink>
        {/* {currentUser
            && (
              <NavLink to="/profile" className={classes.navlink} activeClassName={classes.active}>
                {currentUser.name}
                {console.log(currentUser.name)}
              </NavLink>
            )} */}
        {currentUser ? (
          <ul>
            <li>
              <NavLink to="/doctors" className={classes.navlink} activeClassName={classes.active}>
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/appointments/new" className={classes.navlink} activeClassName={classes.active}>
                Book Appointment
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/appointments" className={classes.navlink} activeClassName={classes.active}>
                Appointments
              </NavLink>
            </li>
            <li>
              <a href="/login" onClick={logOut} className={classes.navlink}>
                Logout
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to="/login" className={classes.navlink} activeClassName={classes.active}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={classes.navlink} activeClassName={classes.active}>
                Sign Up
              </NavLink>
            </li>
          </ul>
        )}
        <footer className={classes.social}>
          <SocialIcons />
          <p>&copy;2021, Hilnex Hospital</p>
        </footer>
      </nav>
    </div>
  );
};

export default SideBar;
