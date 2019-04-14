import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import Pokedex from '.';
import Pokemon from '../Pokemon';
import { Loading } from './Pokedex';

describe('<Pokedex />', () => {
  const props = {
    pokedex: [],
    pokemon: {},
    species: {},
  };
  const wrapper = shallow(<Pokedex {...props} />);
  describe('when data is not yet available', () => {
    it('should show as loading', () => {
      expect(
        wrapper
          .dive()
          .find(Loading)
          .exists(),
      ).toBeTruthy();
    });
  });
  describe('when data is available', () => {
    beforeEach(() => {
      wrapper.setProps({
        ...props,
        pokedex: [{ id: 1, name: 'first' }, { id: 2, name: 'second' }],
      });
    });
    it('should display each pokemon', () => {
      expect(wrapper.dive().find(Pokemon).length).toEqual(
        wrapper.prop('pokedex').length,
      );
    });
  });
  describe('when clicking on the next button', () => {
    const moreProps = {
      ...props,
      loadPokemonRequest: jest.fn(),
      loadSpeciesRequest: jest.fn(),
      pokedex: Array.from({ length: 100 }, (v, i) => ({
        id: i,
        name: `name_${i}`,
      })),
    };
    // enzyme has issues with hooks and shallow so we have to mount
    // https://github.com/airbnb/enzyme/issues/2011
    const mWrapper = mount(<Pokedex {...moreProps} />);
    it('should show the next page', () => {
      expect(mWrapper.find(Pokemon).length).toEqual(30);
      mWrapper.find(Button).simulate('click');
      expect(mWrapper.find(Pokemon).length).toEqual(60);
    });
  });
});

describe('<Loading />', () => {
  const wrapper = shallow(<Loading />);
  it('should display a loading messge', () => {
    expect(wrapper.text()).toMatch('Loading ...');
  });
});
