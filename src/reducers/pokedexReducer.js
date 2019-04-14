import { LOAD_POKEDEX_SUCCESS } from '../actions/pokedexActions';

const reducer = (state = [], action) => {
  const { type, data } = action;
  switch (type) {
    case LOAD_POKEDEX_SUCCESS: {
      return data.pokemon_entries.map(
        ({ entry_number: id, pokemon_species: { name } }) => ({
          id,
          name,
        }),
      );
    }
    default: {
      return state;
    }
  }
};

export default reducer;
