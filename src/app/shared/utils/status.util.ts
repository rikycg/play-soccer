export class StatusUtil {

  private loading = false;
  private load = false;
  private error = false;

  constructor() {}

  get isLoading() {
    return this.loading;
  }

  get isLoad() {
    return this.load;
  }

  get isError() {
    return this.error;
  }

  setError() {
    this.loading = this.load = false;
    this.error = true;
  }

  setData() {
    this.loading = this.error = false;
    this.load = true;
  }

  setLoading() {
    this.load = this.error = false;
    this.loading = true;
  }

  getLoadingBlocks(length = 10) {
    return new Array(length).fill(1);
  }

}
