import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import capitalize from '../../utils/capitalize';
import key from '../../utils/key';

const Loading = ({ t }) => (
  <DialogContent>
    <DialogContentText>{`Loading ${t}...`}</DialogContentText>
  </DialogContent>
);

Loading.defaultProps = { t: '' };

Loading.propTypes = {
  t: PropTypes.string,
};

const PokemonDialog = ({ open, handleClose, pokemon, species, title }) => (
  <Dialog
    aria-labelledby="responsive-dialog-title"
    onClose={handleClose}
    open={open}
  >
    <DialogTitle data-cy="pokemon-dialog" id="responsive-dialog-title">
      {title}
    </DialogTitle>
    {species ? (
      <DialogContent>
        {species.map((t, idx) => (
          <DialogContentText key={key(`species_${idx}`)}>{t}</DialogContentText>
        ))}
      </DialogContent>
    ) : (
      <Loading t="description" />
    )}
    {pokemon ? (
      <Fragment>
        <DialogContent>
          <DialogContentText>
            {`Abilities: ${pokemon.abilities.join(', ')}`}
          </DialogContentText>
          <DialogContentText>
            {`Height and Weight: ${pokemon.height}m, ${pokemon.weight}kg`}
          </DialogContentText>
          <DialogContentText>
            {`Types: ${pokemon.types.join(', ')}`}
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          {pokemon.stats.map(({ name, value }) => (
            <DialogContentText key={`stats_${name}`}>
              {`${capitalize(name)}: ${value}`}
            </DialogContentText>
          ))}
        </DialogContent>
      </Fragment>
    ) : (
      <Loading t="information" />
    )}
    <DialogActions>
      <Button color="primary" data-cy="close-button" onClick={handleClose}>
        close
      </Button>
    </DialogActions>
  </Dialog>
);

PokemonDialog.defaultProps = {
  pokemon: {},
  species: [],
};

PokemonDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  pokemon: PropTypes.shape({}),
  species: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default withMobileDialog()(PokemonDialog);
export { Loading, PokemonDialog as NakedPokemonDialog };
