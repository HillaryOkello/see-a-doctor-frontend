import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useAlert } from 'react-alert';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { login } from '../actions/auth';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
  return '';
};

const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const alert = useAlert();
  const dispatch = useDispatch();

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    // eslint-disable-next-line no-underscore-dangle
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(name, password))
        .then(() => {
          setLoading(false);
          alert.show('You are logged in', {
            type: 'success',
            timeout: 5000,
          });
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/doctors" />;
  }

  return (
    <div className="container">
      <Form onSubmit={handleLogin} ref={form}>
        <div className="form-group">
          Name
          <Input
            id="name"
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={onChangeName}
            validations={[required]}
          />
        </div>

        <div className="form-group">
          Password
          <Input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChangePassword}
            validations={[required]}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-block" disabled={loading} type="submit">
            {loading && (
              <span className="spinner-border spinner-border-sm" />
            )}
            <span>Login</span>
          </button>
        </div>

        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: 'none' }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default Login;
