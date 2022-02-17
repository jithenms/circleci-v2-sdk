import { AxiosError, AxiosResponse } from "axios";
import { CircleCIConfig } from "../config/config";
import {
  GetWorkflowByIdRequest,
  ListWorkflowJobsRequest,
  RerunWorkflowRequest,
  GetWorkflowByIdResponse,
  ListWorkflowJobsResponse,
  RerunWorkflowResponse
} from "../types";

export class Workflows {
  private readonly config: CircleCIConfig;

  constructor(config: CircleCIConfig) {
    this.config = config;
  }

  public getWorkflowById(
    { workflowId }: GetWorkflowByIdRequest
  ): Promise<GetWorkflowByIdResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/workflow/${workflowId}`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public listWorkflowJobs(
    { workflowId }: ListWorkflowJobsRequest
  ): Promise<ListWorkflowJobsResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/workflow/${workflowId}/job`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public rerunWorkflow(
    { workflowId, options }: RerunWorkflowRequest
  ): Promise<RerunWorkflowResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .post(`/workflow/${workflowId}/rerun`, options)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }
}
