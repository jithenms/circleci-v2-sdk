import { Axios, AxiosRequestHeaders } from "axios";
import { name, version } from "../../package.json";

type Config = {
  baseUrl: string;
  options: Options;
  token: string;
  client: Axios;
}

export enum GitProviders {
  GITHUB = "gh",
  BITBUCKET = "bb",
}

type Options = {
  gitProvider: GitProviders;
  username: string;
}

export class CircleCIConfig implements Config {
  public readonly baseUrl: string = "https://circleci.com/api/v2";
  public readonly options: Options;
  public readonly token: string;
  public readonly client: Axios;

  constructor(baseUrl: string, token: string, options: Options) {
    this.baseUrl = baseUrl;
    this.options = options;
    this.token = token;
    this.client = new Axios({
      baseURL: baseUrl,
      headers: {
        "Circle-Token": token,
        "User-Agent": `${name} ${version}`,
        "Content-Type": "application/json",
        Accepts: "application/json",
      } as AxiosRequestHeaders,
    });
  }
}
