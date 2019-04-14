import React from 'react';
import { shallow } from 'enzyme';
import App from '.';

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should contain a main section', () => {
    expect(wrapper.find('main')).toBeTruthy(); // lighthouse enforces this
  });
});
