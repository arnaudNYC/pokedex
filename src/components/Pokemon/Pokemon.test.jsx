import React from 'react';
import { mount, shallow } from 'enzyme';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Pokemon from '.';
import PokemonDialog from './PokemonDialog';

describe('<Pokemon />', () => {
  const props = {
    id: 1,
    loadPokemonRequest: jest.fn(),
    loadSpeciesRequest: jest.fn(),
    name: 'foo',
    pokemon: null,
    species: null,
  };
  const wrapper = shallow(<Pokemon {...props} />);
  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  it('should not show a dialog', () => {
    expect(
      wrapper
        .dive()
        .find(PokemonDialog)
        .exists(),
    ).toBeFalsy();
  });
  it('should show a formatted id', () => {
    expect(
      wrapper
        .dive()
        .find(CardHeader)
        .prop('subheader'),
    ).toEqual('#001');
  });
  it('should show a capitalized name', () => {
    expect(
      wrapper
        .dive()
        .find(CardHeader)
        .prop('title'),
    ).toEqual('Foo');
  });
  it('should show a sprite', () => {
    expect(
      wrapper
        .dive()
        .find(CardMedia)
        .prop('image'),
    ).toEqual(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        props.id
      }.png`,
    );
  });
  describe('when clicking on the card', () => {
    beforeAll(() => {
      wrapper
        .dive()
        .find(CardActionArea)
        .simulate('click');
    });
    afterAll(() => {
      props.loadPokemonRequest.mockReset();
      props.loadSpeciesRequest.mockReset();
    });
    it('should call loadPokemonRequest', () => {
      expect(props.loadPokemonRequest).toHaveBeenCalledTimes(1);
    });
    it('should call loadSpeciesRequest', () => {
      expect(props.loadSpeciesRequest).toHaveBeenCalledTimes(1);
    });
  });
});

describe('<Pokemon />', () => {
  // another suite using mount instead of shallow
  // because shallow doesn't support setState
  describe('when data is available', () => {
    const props = {
      id: 1,
      loadPokemonRequest: jest.fn(),
      loadSpeciesRequest: jest.fn(),
      name: 'foo',
      pokemon: { abilities: [], stats: [], types: [] },
      species: [],
    };
    const wrapper = mount(<Pokemon {...props} />);
    describe('when clicking on a card', () => {
      beforeAll(() => {
        wrapper.find(CardActionArea).simulate('click');
      });
      afterAll(() => {
        props.loadPokemonRequest.mockReset();
        props.loadSpeciesRequest.mockReset();
      });
      it('should display a dialog', () => {
        expect(wrapper.find(PokemonDialog).exists()).toBeTruthy();
      });
      it('should not call loadPokemonRequest', () => {
        expect(props.loadPokemonRequest).toHaveBeenCalledTimes(0);
      });
      it('should not call loadSpeciesRequest', () => {
        expect(props.loadSpeciesRequest).toHaveBeenCalledTimes(0);
      });
      describe('when closing the dialog', () => {
        it('should not display a dialog', () => {
          wrapper
            .find(PokemonDialog)
            .find(Button)
            .simulate('click');
          expect(wrapper.find(PokemonDialog).exists()).toBeFalsy();
        });
      });
    });
  });
});
