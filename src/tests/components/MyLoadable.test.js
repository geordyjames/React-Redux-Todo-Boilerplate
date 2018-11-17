import React from 'react';
import { shallow } from 'enzyme';
import MyLoadable from '../../components/MyLoadable';

test('should render MyLoadable with empty props correctly', () => {
  const wrapper = shallow(<MyLoadable />);
  expect(wrapper).toMatchSnapshot();
});

test('should render MyLoadable with opts props correctly', () => {
  const wrapper = shallow(<MyLoadable opts={{loader: () => {}}} />);
  expect(wrapper).toMatchSnapshot();
});