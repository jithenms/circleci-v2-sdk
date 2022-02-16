import { Axios, AxiosRequestHeaders } from "axios";

interface Config {
    baseUrl: string;
    projectSlug: string;
    token: string;
    auth: boolean;
}

export class CircleCIConfig implements Config {
    public readonly baseUrl: string = "https://circleci.com/api/v2";
    public readonly projectSlug: string;
    public readonly token: string;
    public readonly auth: boolean = false;
    public readonly client: Axios;

    constructor(baseUrl: string, projectSlug: string, token: string, auth: boolean) {
        this.baseUrl = baseUrl;
        this.projectSlug = projectSlug;
        this.token = token;
        this.auth = auth;
        this.client = new Axios({
            baseURL: baseUrl,
            headers: {
              "Circle-Token": token,
            } as AxiosRequestHeaders,
        });
    }
}
