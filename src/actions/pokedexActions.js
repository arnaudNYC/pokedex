import { CALL_API } from '../middleware/api';

/* *** */
export const LOAD_POKEDEX_REQUEST = 'LOAD_POKEDEX_REQUEST';
export const LOAD_POKEDEX_SUCCESS = 'LOAD_POKEDEX_SUCCESS';
export const LOAD_POKEDEX_FAILURE = 'LOAD_POKEDEX_FAILURE';

const fetchPokedex = param => ({
  [CALL_API]: {
    endpoint: 'getPokedexByName',
    types: [LOAD_POKEDEX_REQUEST, LOAD_POKEDEX_SUCCESS, LOAD_POKEDEX_FAILURE],
  },
  param,
});

export const loadPokedexRequest = param => dispatch =>
  dispatch(fetchPokedex(param));

/* *** */
export const LOAD_POKEMON_REQUEST = 'LOAD_POKEMON_REQUEST';
export const LOAD_POKEMON_SUCCESS = 'LOAD_POKEMON_SUCCESS';
export const LOAD_POKEMON_FAILURE = 'LOAD_POKEMON_FAILURE';

const fetchPokemon = param => ({
  [CALL_API]: {
    endpoint: 'getPokemonByName',
    types: [LOAD_POKEMON_REQUEST, LOAD_POKEMON_SUCCESS, LOAD_POKEMON_FAILURE],
  },
  param,
});

export const loadPokemonRequest = name => dispatch =>
  dispatch(fetchPokemon(name));

/* *** */
export const LOAD_SPECIES_REQUEST = 'LOAD_SPECIES_REQUEST';
export const LOAD_SPECIES_SUCCESS = 'LOAD_SPECIES_SUCCESS';
export const LOAD_SPECIES_FAILURE = 'LOAD_SPECIES_FAILURE';

// getPokemonSpeciesByName
const fetchSpecies = param => ({
  [CALL_API]: {
    endpoint: 'getPokemonSpeciesByName',
    types: [LOAD_SPECIES_REQUEST, LOAD_SPECIES_SUCCESS, LOAD_SPECIES_FAILURE],
  },
  param,
});

export const loadSpeciesRequest = name => dispatch =>
  dispatch(fetchSpecies(name));
