import { LOAD_POKEMON_SUCCESS } from '../actions/pokedexActions';

const reducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case LOAD_POKEMON_SUCCESS: {
      const { id, abilities, height, stats, types, weight } = data;
      return {
        ...state,
        [id]: {
          abilities: abilities.map(({ ability }) => ability.name),
          height: height / 10,
          stats: stats.map(({ stat: { name }, base_stat: value }) => ({
            name,
            value,
          })),
          types: types.map(({ type: t }) => t.name),
          weight: weight / 10,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
