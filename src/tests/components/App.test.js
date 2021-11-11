import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import App from '../../App';
import SideBar from '../../components/SideBar';

configure({ adapter: new Adapter() });
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('App', () => {
  it('should render a <Home /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#Home')).toHaveLength(1);
  });

  it('should render a <SideBar /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(SideBar)).toHaveLength(1);
  });

  it('should render a <Login /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#Login')).toHaveLength(1);
  });

  it('should render a <Register /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#Register')).toHaveLength(1);
  });

  it('should render a <Doctor /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#Doctor')).toHaveLength(1);
  });

  it('should render a <Doctors /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#Doctors')).toHaveLength(1);
  });

  it('should render a <NewAppointment /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#NewAppointment')).toHaveLength(1);
  });

  it('should render a routes', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Route)).toHaveLength(8);
  });

  it('should render a Switch', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('matches Render snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});