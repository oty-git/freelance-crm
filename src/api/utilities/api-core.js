import { apiProvider } from "./api-provider";

export class ApiCore {
  constructor(options) {
    if (options.getAll) {
      this.getAll = (url, config) => {
        return apiProvider.getAll(options.url + (url ?? ""), config);
      };
    }

    if (options.getSingle) {
      this.getSingle = (id) => {
        return apiProvider.getSingle(options.url, id);
      };
    }

    if (options.post) {
      this.post = (model, url, event) => {
        return apiProvider.post(options.url + (url ?? ""), model, event);
      };
    }

    if (options.put) {
      this.put = (model, url, event) => {
        return apiProvider.put(options.url + (url ?? ""), model, event);
      };
    }

    if (options.patch) {
      this.patch = (model) => {
        return apiProvider.patch(options.url, model);
      };
    }

    if (options.remove) {
      this.remove = (id, url) => {
        return apiProvider.remove(options.url + (url ?? ""), id);
      };
    }
  }
}
