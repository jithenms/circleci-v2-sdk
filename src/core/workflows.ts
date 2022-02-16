import { AxiosError, AxiosResponse } from "axios";
import { CircleCIConfig } from "../config/config";
import {
  GetWorkflowByIdResponse,
  ListWorkflowJobsResponse,
  RerunWorkflowResponse,
  RerunWorkflowOptions
} from "../types";

export class Workflows {
  private readonly config: CircleCIConfig;

  constructor(config: CircleCIConfig) {
    this.config = config;
  }

  public getWorkflowById(id: string): Promise<GetWorkflowByIdResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/workflow/${id}`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public listWorkflowJobs(id: string): Promise<ListWorkflowJobsResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/workflow/${id}/job`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public rerunWorkflow(
    id: string,
    options: RerunWorkflowOptions
  ): Promise<RerunWorkflowResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .post(`/workflow/${id}/rerun`, options)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }
}
