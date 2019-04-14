import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Pokemon from '../Pokemon';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2,
  },
  container: {
    padding: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
  },
});

export const Loading = () => <div>Loading ...</div>;

const Pokedex = ({ classes, pokedex, pokemon, species, ...rest }) => {
  const [offSet, setOffSet] = useState(0);
  const pageSize = 30;
  const nextPage = () => setOffSet(offSet + pageSize);

  if (!pokedex.length) {
    return <Loading />;
  }
  return (
    <div className={classes.root}>
      <Grid className={classes.container} container spacing={8}>
        {pokedex.slice(0, offSet + pageSize).map((pokedexItem, idx) => (
          <Grid key={pokedexItem.id} id={`p_${idx}`} item sm={4} xs={12}>
            <Pokemon
              {...pokedexItem}
              pokemon={pokemon[pokedexItem.id]}
              species={species[pokedexItem.id]}
              {...rest}
            />
          </Grid>
        ))}
        {offSet + pageSize < pokedex.length && (
          <Grid alignItems="center" container direction="row" justify="center">
            <Button
              className={classes.button}
              color="primary"
              data-cy="next-button"
              onClick={nextPage}
              size="large"
              variant="contained"
            >
              {`Next ${Math.min(
                pageSize,
                pokedex.length - (offSet + pageSize),
              )} (${offSet + pageSize}/${pokedex.length})`}
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

Pokedex.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  pokedex: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  pokemon: PropTypes.shape({}).isRequired,
  species: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Pokedex);
