import {
  REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL,
  LOGOUT, DOCTORS_SUCCESS, DOCTORS_FAIL, SET_MESSAGE, CLEAR_MESSAGE,
} from '../../actions/types';

describe('Action type', () => {
  it('REGISTER_SUCCESS actionType should be a string', () => {
    expect(REGISTER_SUCCESS).toEqual(expect.any(String));
  });

  it('REGISTER_FAIL actionType should be a string', () => {
    expect(REGISTER_FAIL).toEqual(expect.any(String));
  });

  it('LOGIN_SUCCESS actionType should be a string', () => {
    expect(LOGIN_SUCCESS).toEqual(expect.any(String));
  });

  it('LOGIN_FAIL actionType should be a string', () => {
    expect(LOGIN_FAIL).toEqual(expect.any(String));
  });

  it('LOGOUT actionType should be a string', () => {
    expect(LOGOUT).toEqual(expect.any(String));
  });

  it('DOCTORS_SUCCESS actionType should be a string', () => {
    expect(DOCTORS_SUCCESS).toEqual(expect.any(String));
  });

  it('DOCTORS_FAIL actionType should be a string', () => {
    expect(DOCTORS_FAIL).toEqual(expect.any(String));
  });

  it('SET_MESSAGE actionType should be a string', () => {
    expect(SET_MESSAGE).toEqual(expect.any(String));
  });

  it('CLEAR_MESSAGE actionType should be a string', () => {
    expect(CLEAR_MESSAGE).toEqual(expect.any(String));
  });
});
