import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store';
import Login from '../../containers/Login';

configure({ adapter: new Adapter() });
describe('itemDetailedView test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
  });

  it('renders login form', () => {
    expect(wrapper.find('Form')).toHaveLength(0);
  });
});
