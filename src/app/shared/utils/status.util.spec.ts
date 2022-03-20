import { StatusUtil } from './status.util';

describe('StatusUtil', () => {

  let status: StatusUtil;

  beforeEach(() => {
    status = new StatusUtil();
  });

  it('setError should set error in true and loading and load in false', () => {
    status.setError();
    expect(status.isError).toBeTrue();
    expect(status.isLoad).toBeFalse();
    expect(status.isLoading).toBeFalse();
  });

  it('setData should set load in true and loading and error in false', () => {
    status.setData();
    expect(status.isLoad).toBeTrue();
    expect(status.isError).toBeFalse();
    expect(status.isLoading).toBeFalse();
  });

  it('setLoading should set loading in true and loading and load in false', () => {
    status.setLoading();
    expect(status.isLoading).toBeTrue();
    expect(status.isError).toBeFalse();
    expect(status.isLoad).toBeFalse();
  });

});
