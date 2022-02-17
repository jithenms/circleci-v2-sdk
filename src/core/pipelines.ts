import { AxiosError, AxiosResponse } from "axios";
import { CircleCIConfig } from "../config/config";
import {
  TriggerPipelineRequest,
  ContinuePipelineRequest,
  ContinuePipelineResponse,
  ListWorkflowsByPipelineIdRequest,
  ListWorkflowsByPipelineIdResponse,
  ListPipelinesRequest,
  ListPipelinesResponse,
  ListPipelinesByProjectRequest,
  GetPipelineByIdRequest,
  GetPipelineByNumberRequest,
  GetPipelineByNumberResponse,
  GetPipelineByIdResponse,
  GetPipelineConfigByIdRequest,
  GetPipelineConfigByIdResponse,
  ListPipelinesByProjectResponse,
  TriggerPipelineResponse,
} from "../types";
import { getOrgSlug, getProjectSlug } from "../util/util";

export class Pipelines {
  private readonly config: CircleCIConfig;

  constructor(config: CircleCIConfig) {
    this.config = config;
  }

  public triggerPipeline({
    repo,
    branch,
    tag,
    parameters,
  }: TriggerPipelineRequest): Promise<TriggerPipelineResponse> {
    return new Promise((resolve, reject) => {
      const projectSlug = getProjectSlug(
        this.config.options.gitProvider,
        this.config.options.username,
        repo
      );
      this.config.client
        .post(`/project/${projectSlug}/pipeline`, {
          branch: branch,
          tag: tag,
          parameters: parameters,
        })
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public continuePipeline(
    request: ContinuePipelineRequest
  ): Promise<ContinuePipelineResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .post(`/pipeline/continue`, request)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getPipelineConfigById({
    pipelineId,
  }: GetPipelineConfigByIdRequest): Promise<GetPipelineConfigByIdResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/pipeline/${pipelineId}/config`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public listWorkflowsByPipelineId({
    pipelineId,
    pageToken,
  }: ListWorkflowsByPipelineIdRequest): Promise<ListWorkflowsByPipelineIdResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/pipeline/${pipelineId}/workflow`, {
          params: {
            "page-token": pageToken,
          },
        })
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public listPipelinesForProject({
    repo,
    branch,
    pageToken,
  }: ListPipelinesByProjectRequest): Promise<ListPipelinesByProjectResponse> {
    return new Promise((resolve, reject) => {
      const projectSlug = getProjectSlug(
        this.config.options.gitProvider,
        this.config.options.username,
        repo
      );
      this.config.client
        .get(`/project/${projectSlug}/pipeline`, {
          params: {
            branch: branch,
            "page-token": pageToken,
          },
        })
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public listPipelines({
    pageToken,
    mine,
  }: ListPipelinesRequest): Promise<ListPipelinesResponse> {
    return new Promise((resolve, reject) => {
      // TODO: Maybe param instead of util
      const orgSlug = getOrgSlug(
        this.config.options.gitProvider,
        this.config.options.username
      );
      this.config.client
        .get(`/pipeline`, {
          params: {
            "org-slug": orgSlug,
            "page-token": pageToken,
            mine: mine,
          },
        })
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getPipelineById({
    pipelineId,
  }: GetPipelineByIdRequest): Promise<GetPipelineByIdResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/pipeline/${pipelineId}`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getPipelineByNumber({
    pipelineNumber,
    repo,
  }: GetPipelineByNumberRequest): Promise<GetPipelineByNumberResponse> {
    return new Promise((resolve, reject) => {
      const projectSlug = getProjectSlug(
        this.config.options.gitProvider,
        this.config.options.username,
        repo
      );
      this.config.client
        .get(`/project/${projectSlug}/pipeline/${pipelineNumber}`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }
}
