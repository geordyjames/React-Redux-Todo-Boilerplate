import React from 'react';
import { shallow } from 'enzyme';
import todos from '../fixtures/todos';
import { HomePage } from '../../components/HomePage';

test('should render HomePage correctly', () => {
  const wrapper = shallow(<HomePage name="Hello" todo={todos} handleDeleteOption={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});