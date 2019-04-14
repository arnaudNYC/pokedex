import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PokemonDialog from './PokemonDialog';

const noDataProps = {
  handleClose: action('handleClose'),
  open: true,
  pokemon: null,
  species: null,
  title: 'Title',
};

const props = {
  handleClose: action('handleClose'),
  open: true,
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
  title: 'Title',
};

storiesOf('PokemonDialog/desktop', PokemonDialog)
  .add('with data', () => <PokemonDialog {...props} />)
  .add('without data', () => <PokemonDialog {...noDataProps} />);

storiesOf('PokemonDialog/mobile', PokemonDialog)
  .addParameters({ viewport: { defaultViewport: 'iphonex' } })
  .add('with data', () => <PokemonDialog {...props} />)
  .add('without data', () => <PokemonDialog {...noDataProps} />);
