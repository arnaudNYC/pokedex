import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import PokemonDialog from './PokemonDialog';
import capitalize from '../../utils/capitalize';

const styles = theme => ({
  actions: { justifyContent: 'center' },
  card: {
    maxWidth: 400,
    minWidth: 250,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  toolbar: {
    justifyContent: 'flex-end',
  },
});

const Pokemon = ({
  classes,
  id,
  loadPokemonRequest,
  loadSpeciesRequest,
  name,
  pokemon,
  species,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (pokemon === null) {
      loadPokemonRequest(name);
    }
    if (species === null) {
      loadSpeciesRequest(name);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cardHeaderProps = {
    subheader: `#${String(id).padStart(3, 0)}`,
    title: capitalize(name),
  };

  return (
    <>
      <Card className={classes.card} data-cy={`p-${id}`}>
        <CardActionArea onClick={handleClickOpen}>
          <CardHeader {...cardHeaderProps} />
          <CardMedia
            async
            component="img"
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            title={cardHeaderProps.title}
          />
        </CardActionArea>
      </Card>
      {open && (
        <PokemonDialog
          handleClose={handleClose}
          open={open}
          pokemon={pokemon}
          species={species}
          title={`${cardHeaderProps.subheader} - ${cardHeaderProps.title}`}
        />
      )}
    </>
  );
};

Pokemon.defaultProps = {
  pokemon: null,
  species: null,
};

Pokemon.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  id: PropTypes.number.isRequired,
  loadPokemonRequest: PropTypes.func.isRequired,
  loadSpeciesRequest: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  pokemon: PropTypes.shape({}),
  species: PropTypes.arrayOf(PropTypes.string),
};
export default withStyles(styles)(Pokemon);
