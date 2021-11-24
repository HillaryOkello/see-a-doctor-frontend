import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <h3>
        <strong>{currentUser.name}</strong>
        {' '}
        Profile
      </h3>
      <p>
        <strong>Token:</strong>
        {' '}
        {currentUser.jwt}
        {' '}
        ...
        {' '}
        {currentUser.jwt}
      </p>
      <p>
        <strong>Id:</strong>
        {' '}
        {currentUser.user.id}
      </p>
      <p>
        <strong>Name:</strong>
        {' '}
        {currentUser.user.name}
      </p>
    </div>
  );
};

export default Profile;
