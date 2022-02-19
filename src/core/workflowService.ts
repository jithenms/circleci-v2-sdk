import { AxiosError, AxiosResponse } from "axios";
import {
  GetWorkflowByIdRequest,
  ListWorkflowJobsRequest,
  RerunWorkflowRequest,
} from "../types/requests/workflowRequests";
import { CircleCIConfig } from "../config/config";
import {
  Workflow,
  WorkflowInfo,
  WorkflowJobList,
} from "../types/data/workflowData";

export class WorkflowService {
  private readonly config: CircleCIConfig;

  constructor(config: CircleCIConfig) {
    this.config = config;
  }

  public getWorkflowById({
    workflowId
  }: GetWorkflowByIdRequest): Promise<Workflow> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/workflow/${workflowId}`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public listWorkflowJobs({
    workflowId,
  }: ListWorkflowJobsRequest): Promise<WorkflowJobList> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/workflow/${workflowId}/job`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public rerunWorkflow({
    workflowId,
    options,
  }: RerunWorkflowRequest): Promise<WorkflowInfo> {
    return new Promise((resolve, reject) => {
      this.config.client
        .post(`/workflow/${workflowId}/rerun`, options)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }
}
