import React from 'react';
import { shallow } from 'enzyme';
import todos from '../fixtures/todos';
import { AddOption } from '../../components/AddOption';

test('should render AddOption correctly', () => {
  const wrapper = shallow(<AddOption />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<AddOption />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { },
    persist: () => {},
    target: {
      elements: {
        option: {
          value: ''
        }
      }
    }
  });
  expect(wrapper.state('error')).toBe('Enter valid value to add item');
  expect(wrapper).toMatchSnapshot();
});

test('should render error for duplicate form submission', () => {
  const value = todos[1].name;
  const wrapper = shallow(<AddOption todo={todos}/>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { },
    persist: () => {},
    target: {
      elements: {
        option: {
          value
        }
      }
    }
  });
  expect(wrapper.state('error')).toBe('This option already exists');
  expect(wrapper).toMatchSnapshot();
});

test('should render AddOption for valid form submission', () => {
  const handleAddOption = jest.fn();
  const value = 'Hello';
  const wrapper = shallow(<AddOption todo={todos} handleAddOption={handleAddOption} />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { },
    persist: () => {},
    target: {
      elements: {
        option: {
          value
        }
      }
    }
  });
  expect(wrapper.state('error')).toBe(null);
  expect(handleAddOption).toHaveBeenLastCalledWith(value);
  expect(wrapper).toMatchSnapshot();
});