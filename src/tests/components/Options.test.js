import React from 'react';
import { shallow } from 'enzyme';
import todos from '../fixtures/todos';
import Options from '../../components/Options';

test('should render Options with empty todo  correctly', () => {
  const wrapper = shallow(<Options options={[]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Options with todos correctly', () => {
  const wrapper = shallow(<Options options={todos} handleDeleteOption={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});