import { combineReducers } from 'redux';
import pokedex from './pokedexReducer';
import pokemon from './pokemonReducer';
import species from './speciesReducer';

export default combineReducers({ pokedex, pokemon, species });
