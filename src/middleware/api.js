const Pokedex = require('pokeapi-js-wrapper');

const options = {
  cache: true,
  hostName: 'pokeapi.co',
  protocol: 'https',
  timeout: 5 * 1000,
  versionPath: '/api/v2/',
};

const P = new Pokedex.Pokedex(options);

export const CALL_API = 'Call API';

export default () => next => action => {
  const { [CALL_API]: callAPI, param } = action;
  if (typeof callAPI === 'undefined') {
    return next(action);
  }
  const { endpoint, types } = callAPI;

  const actionWith = nextAction => {
    const { [CALL_API]: del, ...finalAction } = {
      ...action,
      ...nextAction,
    };
    return finalAction;
  };

  const [requestType, successType, failureType] = types;

  next(actionWith({ type: requestType }));

  return P[endpoint](param).then(
    response =>
      next(
        actionWith({
          data: response,
          type: successType,
        }),
      ),
    error =>
      next(
        actionWith({
          error: error.message,
          type: failureType,
        }),
      ),
  );
};
