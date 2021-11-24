import { LOGIN_SUCCESS, LOGOUT } from '../../actions/types';
import auth from '../../reducers/auth';

describe('User reducer', () => {
  const initialState = {
    isLoggedIn: false,
    currentUser: '',
    user: null,
  };

  it('should successfully login the user', () => {
    expect(auth(initialState, {
      type: LOGIN_SUCCESS,
      payload: 'kelly',
    })).toEqual({
      ...initialState,
      isLoggedIn: true,
      user: 'kelly'.user,
    });
  });

  it('should successfully log out the user', () => {
    expect(auth(initialState, {
      type: LOGOUT,
    })).toEqual({
      ...initialState,
      isLoggedIn: false,
      currentUser: '',
      user: null,
    });
  });
});
