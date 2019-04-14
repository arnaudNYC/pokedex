import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import PokedexContainer, { mapStateToProps } from './PokedexContainer';

const mockStore = configureMockStore({});

describe('<PokedexContainer />', () => {
  const initialState = {
    pokedex: [],
    pokemon: {},
    species: {},
  };
  const store = mockStore(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <PokedexContainer />
    </Provider>,
  );
  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  describe('.mapStateToProps', () => {
    it('should map the state to props', () => {
      const state = {
        ...initialState,
        junk: 'junk',
      };
      expect(mapStateToProps(state)).toMatchObject(initialState);
    });
  });
});
