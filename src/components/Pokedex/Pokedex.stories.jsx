import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pokedex from '.';

const noDataProps = {
  classes: {},
  pokedex: [],
  pokemon: {},
  species: {},
};

const props = {
  classes: {},
  loadPokemonRequest: action('loadPokemonRequest'),
  loadSpeciesRequest: action('loadSpeciesRequest'),
  pokedex: [
    {
      id: 1,
      name: 'first',
    },
  ],
  pokemon: {
    1: {
      abilities: ['a1', 'a2'],
      height: 10,
      stats: [
        {
          name: 'stat1',
          value: 1,
        },
      ],
      types: ['type1', 'type2'],
      weight: 100,
    },
  },
  species: {
    1: ['a description'],
  },
};

storiesOf('Pokedex/desktop', Pokedex)
  .add('with data', () => <Pokedex {...props} />)
  .add('without data', () => <Pokedex {...noDataProps} />);

storiesOf('Pokedex/mobile', Pokedex)
  .addParameters({ viewport: { defaultViewport: 'iphonex' } })
  .add('with data', () => <Pokedex {...props} />)
  .add('without data', () => <Pokedex {...noDataProps} />);
