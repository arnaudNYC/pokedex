import { combineReducers } from 'redux';
import rootReducer from './index';
import pokedex from './pokedexReducer';
import pokemon from './pokemonReducer';
import species from './speciesReducer';

describe('#combineReducers', () => {
  it('should combine all reducers', () => {
    const action = { type: 'foo' };
    const expected = combineReducers({
      pokedex,
      pokemon,
      species,
    })(undefined, action);
    expect(rootReducer(undefined, action)).toMatchObject(expected);
  });
});
