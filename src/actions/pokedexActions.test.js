import {
  LOAD_POKEDEX_FAILURE,
  LOAD_POKEDEX_REQUEST,
  LOAD_POKEDEX_SUCCESS,
  LOAD_POKEMON_FAILURE,
  LOAD_POKEMON_REQUEST,
  LOAD_POKEMON_SUCCESS,
  LOAD_SPECIES_FAILURE,
  LOAD_SPECIES_REQUEST,
  LOAD_SPECIES_SUCCESS,
  loadPokedexRequest,
  loadPokemonRequest,
  loadSpeciesRequest,
} from './pokedexActions';

describe('#pokedexActions', () => {
  const dispatch = jest.fn();
  describe('.loadPokedexRequest', () => {
    it('should dispatch an action', () => {
      loadPokedexRequest('1')(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        'Call API': {
          endpoint: 'getPokedexByName',
          types: [
            LOAD_POKEDEX_REQUEST,
            LOAD_POKEDEX_SUCCESS,
            LOAD_POKEDEX_FAILURE,
          ],
        },
        param: '1',
      });
    });
  });

  describe('.loadPokemonRequest', () => {
    it('should dispatch an action', () => {
      loadPokemonRequest('2')(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        'Call API': {
          endpoint: 'getPokemonByName',
          types: [
            LOAD_POKEMON_REQUEST,
            LOAD_POKEMON_SUCCESS,
            LOAD_POKEMON_FAILURE,
          ],
        },
        param: '2',
      });
    });
  });

  describe('.loadSpeciesRequest', () => {
    it('should dispatch an action', () => {
      loadSpeciesRequest('3')(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        'Call API': {
          endpoint: 'getPokemonSpeciesByName',
          types: [
            LOAD_SPECIES_REQUEST,
            LOAD_SPECIES_SUCCESS,
            LOAD_SPECIES_FAILURE,
          ],
        },
        param: '3',
      });
    });
  });
});
