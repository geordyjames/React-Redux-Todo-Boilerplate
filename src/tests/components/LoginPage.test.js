import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { },
    target: {
      elements: {
        name: {
          value: ''
        }
      }
    }
  });
  expect(wrapper.state('error')).toBe('Enter your name to login');
  expect(wrapper).toMatchSnapshot();
});

test('should render LoginPage for valid form submission', () => {
  const startLogin = jest.fn();
  const value = 'Hello';
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { },
    target: {
      elements: {
        name: {
          value
        }
      }
    }
  });
  expect(wrapper.state('error')).toBe(null);
  expect(startLogin).toHaveBeenLastCalledWith(value);
  expect(wrapper).toMatchSnapshot();
});