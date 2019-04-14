import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Pokemon from '.';

const props = {
  classes: {},
  id: 1,
  loadPokemonRequest: action('loadPokemonRequest'),
  loadSpeciesRequest: action('loadSpeciesRequest'),
  name: 'first',
  pokemon: {
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
  species: ['a description'],
};

storiesOf('Pokemon', Pokemon).add('desktop', () => <Pokemon {...props} />);

storiesOf('Pokemon', Pokemon)
  .addParameters({ viewport: { defaultViewport: 'iphonex' } })
  .add('mobile', () => <Pokemon {...props} />);
