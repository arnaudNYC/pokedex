import reduce from './pokemonReducer';
import { LOAD_POKEMON_SUCCESS } from '../actions/pokedexActions';

describe('#pokemonReducer', () => {
  it(`should reduce action ${LOAD_POKEMON_SUCCESS}`, () => {
    const action = {
      data: {
        abilities: [{ ability: { name: 'a1' } }, { ability: { name: 'a2' } }],
        height: 10,
        id: 1,
        stats: [
          { base_stat: 1, stat: { name: 's1' } },
          { base_stat: 2, stat: { name: 's2' } },
        ],
        types: [{ type: { name: 't1' } }, { type: { name: 't2' } }],
        weight: 100,
      },
      type: LOAD_POKEMON_SUCCESS,
    };
    const actual = reduce(undefined, action);
    const expected = {
      '1': {
        abilities: ['a1', 'a2'],
        height: 1,
        stats: [{ name: 's1', value: 1 }, { name: 's2', value: 2 }],
        types: ['t1', 't2'],
        weight: 10,
      },
    };
    expect(actual).toMatchObject(expected);
  });
  it('should not reduce other action', () => {
    const state = 'wombat';
    expect(reduce(state, { type: 'other' })).toEqual(state);
  });
});
