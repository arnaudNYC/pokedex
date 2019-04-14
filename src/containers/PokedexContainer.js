import { connect } from 'react-redux';
import Pokedex from '../components/Pokedex';
import {
  loadPokemonRequest,
  loadSpeciesRequest,
} from '../actions/pokedexActions';

const mapStateToProps = ({ pokedex, pokemon, species }) => ({
  pokedex,
  pokemon,
  species,
});

const mapDispatchToProps = {
  loadPokemonRequest,
  loadSpeciesRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pokedex);

export { mapStateToProps };
