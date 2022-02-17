import { AxiosError, AxiosResponse } from "axios";
import { CircleCIConfig } from "../config/config";
import {
    AddEnvVariableRequest,
    AddEnvVariableResponse,
    CreateContextRequest,
    CreateContextResponse,
    DeleteContextRequest,
    DeleteContextResponse,
    DeleteEnvVariableRequest,
    DeleteEnvVariableResponse,
    GetContextRequest,
    GetContextResponse,
    ListContextsRequest,
    ListContextsResponse,
    ListEnvVariablesRequest,
    ListEnvVariablesResponse,
} from "../types/contextTypes";

export class Context {
    private readonly config: CircleCIConfig;

    constructor(config: CircleCIConfig) {
        this.config = config;
    }

    public listContexts({
        ownerId,
        ownerSlug,
        ownerType,
        pageToken,
    }: ListContextsRequest): Promise<ListContextsResponse> {
        return new Promise((resolve, reject) => {
            this.config.client
                .get(`/context`, {
                    params: {
                        "owner-id": ownerId,
                        "owner-slug": ownerSlug,
                        "owner-type": ownerType,
                        "page-token": pageToken,
                    },
                })
                .then((res: AxiosResponse) => resolve(res.data))
                .catch((error: AxiosError) => reject(error));
        });
    }

    public createContext(
        request: CreateContextRequest
    ): Promise<CreateContextResponse> {
        return new Promise((resolve, reject) => {
            this.config.client
                .post("/context", request)
                .then((res: AxiosResponse) => resolve(res.data))
                .catch((error: AxiosError) => reject(error));
        });
    }

    public deleteContext({
        contextId,
    }: DeleteContextRequest): Promise<DeleteContextResponse> {
        return new Promise((resolve, reject) => {
            this.config.client
                .delete(`/context/${contextId}`)
                .then((res: AxiosResponse) => resolve(res.data))
                .catch((error: AxiosError) => reject(error));
        });
    }

    public getContext({
        contextId,
    }: GetContextRequest): Promise<GetContextResponse> {
        return new Promise((resolve, reject) => {
            this.config.client
                .get(`/context/${contextId}`)
                .then((res: AxiosResponse) => resolve(res.data))
                .catch((error: AxiosError) => reject(error));
        });
    }

    public listEnvironmentVariablesFromContext({
        contextId,
    }: ListEnvVariablesRequest): Promise<ListEnvVariablesResponse> {
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
    }: DeleteEnvVariableRequest): Promise<DeleteEnvVariableResponse> {
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
    }: AddEnvVariableRequest): Promise<AddEnvVariableResponse> {
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
