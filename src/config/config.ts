import axios, { Axios, AxiosRequestHeaders } from "axios";

export type Config = {
  baseUrl?: string;
  options: Options;
  token: string;
  client?: Axios;
};

type Options = {
  /** @description gh = github, bb = bitbucket */
  gitProvider: "gh" | "bb";
  /** @description account username or organization name */
  username: string;
};

export class CircleCIConfig implements Config {
  public readonly baseUrl: string;
  public readonly options: Options;
  public readonly token: string;
  public readonly client: Axios;

  constructor({
    token,
    options,
    client,
    baseUrl = "https://circleci.com/api/v2",
  }: Config) {
    this.baseUrl = baseUrl;
    this.options = options;
    this.token = token;
    this.client = client
      ? client
      : axios.create({
        baseURL: baseUrl,
        headers: {
          "Circle-Token": token,
          "Content-Type": "application/json",
          Accepts: "application/json",
        } as AxiosRequestHeaders,
      });
  }
}
