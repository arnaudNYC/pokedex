import Api, { CALL_API } from './api';

describe('#Api', () => {
  const next = jest.fn();

  beforeAll(() => {});
  afterEach(() => {});
  afterAll(() => {});

  it('should skip actions in different namespaces', () => {
    const action = { type: 'foo' };
    Api()(next)(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  describe('when doing a LOAD', () => {
    describe('when it is successful', () => {
      it('should return a SUCCESS action', async () => {
        const action = {
          [CALL_API]: {
            endpoint: 'foo',
            types: ['LOAD_FOO_REQUEST', 'LOAD_FOO_SUCCESS', 'LOAD_FOO_FAILURE'],
          },
        };
        await Api()(next)(action);
        expect(next).toHaveBeenCalledWith({
          data: 'foo',
          type: 'LOAD_FOO_SUCCESS',
        });
      });
    });
    describe('when it fails', () => {
      it('should return a FAILURE action', async () => {
        const action = {
          [CALL_API]: {
            endpoint: 'bad',
            types: ['LOAD_FOO_REQUEST', 'LOAD_FOO_SUCCESS', 'LOAD_FOO_FAILURE'],
          },
        };
        await Api()(next)(action);
        expect(next).toHaveBeenCalledWith({
          error: 'bad',
          type: 'LOAD_FOO_FAILURE',
        });
      });
    });
  });
});
