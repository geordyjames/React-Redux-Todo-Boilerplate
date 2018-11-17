import React from 'react';
import { shallow } from 'enzyme';
import InputError from '../../components/InputError';

test('should render InputError with error prop correctly', () => {
  const wrapper = shallow(<InputError error="Some Error Message" />);
  expect(wrapper).toMatchSnapshot();
});

test('should render InputError with no error prop correctly', () => {
  const wrapper = shallow(<InputError />);
  expect(wrapper).toMatchSnapshot();
});