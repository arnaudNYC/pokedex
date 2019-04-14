import reduce from './pokedexReducer';
import { LOAD_POKEDEX_SUCCESS } from '../actions/pokedexActions';

describe('#pokedexReducer', () => {
  it(`should reduce action ${LOAD_POKEDEX_SUCCESS}`, () => {
    const action = {
      data: {
        pokemon_entries: [
          { entry_number: 1, pokemon_species: { name: 'first' } },
        ],
      },
      type: LOAD_POKEDEX_SUCCESS,
    };
    const actual = reduce(undefined, action);
    const expected = [{ id: 1, name: 'first' }];
    expect(actual).toMatchObject(expected);
  });
  it('should not reduce other action', () => {
    const state = 'wombat';
    expect(reduce(state, { type: 'other' })).toEqual(state);
  });
});
