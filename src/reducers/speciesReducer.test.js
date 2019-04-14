import reduce from './speciesReducer';
import { LOAD_SPECIES_SUCCESS } from '../actions/pokedexActions';

describe('#speciesReducer', () => {
  it(`should reduce action ${LOAD_SPECIES_SUCCESS}`, () => {
    const action = {
      data: {
        flavor_text_entries: [
          { language: { name: '!en' }, version: { name: '!red' } },
          { language: { name: 'en' }, version: { name: '!red' } },
          {
            flavor_text: 'some\nstring',
            language: { name: 'en' },
            version: { name: 'red' },
          },
        ],
        id: 1,
      },
      type: LOAD_SPECIES_SUCCESS,
    };
    const actual = reduce(undefined, action);
    const expected = { 1: ['some string'] };
    expect(actual).toMatchObject(expected);
  });
  it('should not reduce other action', () => {
    const state = 'wombat';
    expect(reduce(state, { type: 'other' })).toEqual(state);
  });
});
