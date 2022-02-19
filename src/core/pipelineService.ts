import { AxiosError, AxiosResponse } from "axios";
import { CircleCIConfig } from "../config/config";
import { Message } from "../types/common";
import {
  Pipeline,
  PipelineConfig,
  PipelineList,
  TriggeredPipeline,
} from "../types/data/pipelineData";
import {
  ContinuePipelineRequest,
  GetPipelineByIdRequest,
  GetPipelineByNumberRequest,
  GetPipelineConfigByIdRequest,
  ListPipelinesByProjectRequest,
  ListPipelinesRequest,
  ListWorkflowsByPipelineIdRequest,
  TriggerPipelineRequest,
} from "../types/requests/pipelineRequests";
import { WorkflowList } from "../types/data/workflowData";

export class PipelineService {
  private readonly config: CircleCIConfig;

  constructor(config: CircleCIConfig) {
    this.config = config;
  }

  public triggerPipeline({
    projectSlug,
    branch,
    tag,
    parameters,
  }: TriggerPipelineRequest): Promise<TriggeredPipeline> {
    return new Promise((resolve, reject) => {
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

  public continuePipeline(request: ContinuePipelineRequest): Promise<Message> {
    return new Promise((resolve, reject) => {
      this.config.client
        .post(`/pipeline/continue`, request)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getPipelineConfigById({
    pipelineId,
  }: GetPipelineConfigByIdRequest): Promise<PipelineConfig> {
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
  }: ListWorkflowsByPipelineIdRequest): Promise<WorkflowList> {
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

  public listPipelines(params?: ListPipelinesRequest): Promise<PipelineList> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/pipeline`, {
          params: {
            "org-slug": params?.orgSlug,
            "page-token": params?.pageToken,
            mine: params?.mine
          },
        })
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public listPipelinesForProject({
    branch,
    pageToken,
    projectSlug
  }: ListPipelinesByProjectRequest): Promise<PipelineList> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/project/${projectSlug}/pipeline`, {
          params: {
            branch: branch,
            "page-token": pageToken
          },
        })
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getPipelineById({
    pipelineId,
  }: GetPipelineByIdRequest): Promise<Pipeline> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/pipeline/${pipelineId}`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getPipelineByNumber({
    pipelineNumber,
    projectSlug,
  }: GetPipelineByNumberRequest): Promise<Pipeline> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/project/${projectSlug}/pipeline/${pipelineNumber}`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }
}
