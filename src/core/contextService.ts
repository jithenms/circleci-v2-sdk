import { AxiosError, AxiosResponse } from "axios";
import { CircleCIConfig } from "../config/config";
import { Message } from "../types/common";
import {
    AddedEnvVariable,
    ContextList,
    Context,
    EnvVariableList,
} from "../types/data/contextData";
import {
    AddEnvVariableRequest,
    CreateContextRequest,
    DeleteContextRequest,
    DeleteEnvVariableRequest,
    GetContextRequest,
    ListContextsRequest,
    ListEnvVariablesRequest,
} from "../types/requests/contextRequests";

export class ContextService {
    private readonly config: CircleCIConfig;

    constructor(config: CircleCIConfig) {
        this.config = config;
    }

    public listContexts(params?: ListContextsRequest): Promise<ContextList> {
        return new Promise((resolve, reject) => {
            this.config.client
                .get(`/context`, {
                    params: {
                        "owner-id": params?.ownerId,
                        "owner-slug": params?.ownerSlug,
                        "owner-type": params?.ownerType,
                        "page-token": params?.pageToken,
                    },
                })
                .then((res: AxiosResponse) => resolve(res.data))
                .catch((error: AxiosError) => reject(error));
        });
    }

    public createContext(request: CreateContextRequest): Promise<Context> {
        return new Promise((resolve, reject) => {
            this.config.client
                .post("/context", request)
                .then((res: AxiosResponse) => resolve(res.data))
                .catch((error: AxiosError) => reject(error));
        });
    }

    public deleteContext({ contextId }: DeleteContextRequest): Promise<Message> {
        return new Promise((resolve, reject) => {
            this.config.client
                .delete(`/context/${contextId}`)
                .then((res: AxiosResponse) => resolve(res.data))
                .catch((error: AxiosError) => reject(error));
        });
    }

    public getContext({ contextId }: GetContextRequest): Promise<Context> {
        return new Promise((resolve, reject) => {
            this.config.client
                .get(`/context/${contextId}`)
                .then((res: AxiosResponse) => resolve(res.data))
                .catch((error: AxiosError) => reject(error));
        });
    }

    public listEnvironmentVariablesFromContext({
        contextId,
    }: ListEnvVariablesRequest): Promise<EnvVariableList> {
        return new Promise((resolve, reject) => {
            this.config.client
                .get(`/context/${contextId}/environment-variable`)
                .then((res: AxiosResponse) => resolve(res.data))
                .catch((error: AxiosError) => reject(error));
        });
    }

    public deleteEnvironmentVariableFromContext({
        contextId,
        envVarName,
    }: DeleteEnvVariableRequest): Promise<Message> {
        return new Promise((resolve, reject) => {
            this.config.client
                .delete(`/context/${contextId}/environment-variable/${envVarName}`)
                .then((res: AxiosResponse) => resolve(res.data))
                .catch((error: AxiosError) => reject(error));
        });
    }

    public addEnvironmentVariableToContext({
        contextId,
        envVarName,
        envValue,
    }: AddEnvVariableRequest): Promise<AddedEnvVariable> {
        return new Promise((resolve, reject) => {
            this.config.client
                .put(`/context/${contextId}/environment-variable/${envVarName}`, {
                    value: envValue,
                })
                .then((res: AxiosResponse) => resolve(res.data))
                .catch((error: AxiosError) => reject(error));
        });
    }
}
