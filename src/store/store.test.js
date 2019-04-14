import devStore from './configureStore.dev';
import prodStore from './configureStore.prod';
import store from './index';

describe('#store', () => {
  const suts = [devStore({}), prodStore({}), store];
  it('should build a store', () => {
    suts.forEach(sut => {
      expect(sut.getState()).toMatchObject({
        pokedex: [],
        pokemon: {},
        species: {},
      });
    });
  });
});
