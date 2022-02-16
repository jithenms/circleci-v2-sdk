import { AxiosError, AxiosResponse } from "axios";
import { CircleCIConfig } from "../config/config";
import {
  GetPipelineByIdResponse,
  ListPipelinesByProjectResponse,
  TriggerPipelineResponse,
} from "../types";

export class Pipelines {
  private readonly config: CircleCIConfig;

  constructor(config: CircleCIConfig) {
    this.config = config;
  }

  public triggerPipeline(
    branch: string,
    tag: string,
    parameters: Record<string, string | number | boolean>
  ): Promise<TriggerPipelineResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .post(`/project/${this.config.projectSlug}/pipeline`, {
          branch: branch,
          tag: tag,
          parameters: parameters,
        })
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public listPipelinesForProject(
    branch: string,
    pageToken: string
  ): Promise<ListPipelinesByProjectResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/project/${this.config.projectSlug}/pipeline`, {
          params: {
            branch: branch,
            "page-token": pageToken,
          },
        })
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getPipelineById(id: string): Promise<GetPipelineByIdResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/pipeline/${id}`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }
}
