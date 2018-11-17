import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../components/Loading';

test('should render Loading with empty props correctly', () => {
  const wrapper = shallow(<Loading />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Loading with error prop correctly', () => {
  const wrapper = shallow(<Loading error={true} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Loading with timedOut prop correctly', () => {
  const wrapper = shallow(<Loading timedOut={true} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Loading with pastDelay prop correctly', () => {
  const wrapper = shallow(<Loading pastDelay={true} />);
  expect(wrapper).toMatchSnapshot();
});