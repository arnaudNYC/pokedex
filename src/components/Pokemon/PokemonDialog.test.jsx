import React from 'react';
import { shallow } from 'enzyme';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Loading, NakedPokemonDialog as PokemonDialog } from './PokemonDialog';

describe('<PokemonDialog />', () => {
  const props = {
    handleClose: jest.fn(),
    open: true,
    pokemon: {
      abilities: [],
      height: 1,
      stats: [{ name: 's', value: 's1' }],
      types: [],
      weight: 1,
    },
    species: ['foo'],
    title: 'title',
  };
  const wrapper = shallow(<PokemonDialog {...props} />);
  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  describe('when data is available', () => {
    it('should not show loading messages', () => {
      expect(wrapper.dive().find('Loading').length).toBe(0);
    });
  });
  describe('when no data is available', () => {
    afterAll(() => {
      wrapper.setProps(props);
    });
    it('should show loading messages', () => {
      wrapper.setProps({ pokemon: null, species: null });
      expect(wrapper.dive().find('Loading').length).toBe(2);
    });
  });
});

describe('<Loading />', () => {
  const wrapper = shallow(<Loading t="foo" />);
  it('should display a loading message', () => {
    expect(
      wrapper
        .dive()
        .find(DialogContentText)
        .exists(),
    ).toBeTruthy();
  });
});
