import { LOAD_SPECIES_SUCCESS } from '../actions/pokedexActions';

const reducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case LOAD_SPECIES_SUCCESS: {
      const { id, flavor_text_entries: flavors } = data;
      return {
        ...state,
        [id]: flavors
          .filter(
            ({ language, version }) =>
              language.name === 'en' && version.name === 'red',
          )
          .map(({ flavor_text: flavor }) => flavor.replace(/\n/g, ' ')),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
