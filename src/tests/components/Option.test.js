import React from 'react';
import { shallow } from 'enzyme';
import Option from '../../components/Option';

test('should render Option correctly', () => {
  const wrapper = shallow(<Option />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Option with values correctly', () => {
  const wrapper = shallow(<Option id={10} count={5} optionText="Hello" />);
  expect(wrapper).toMatchSnapshot();
});

test('should call handleDeleteOption on button click', () => {
  const handleDeleteOption = jest.fn();
  const wrapper = shallow(<Option id={10} handleDeleteOption={handleDeleteOption} />);
  wrapper.find('button').simulate('click');
  expect(handleDeleteOption).toHaveBeenLastCalledWith(10);
});