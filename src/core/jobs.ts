import { AxiosError, AxiosResponse } from "axios";
import { CircleCIConfig } from "../config/config";
import { GetJobArtifactsResponse, GetJobDetailsResponse, GetTestsResponse } from "../types";

export class Jobs {
  private readonly config: CircleCIConfig;

  constructor(config: CircleCIConfig) {
    this.config = config;
  }

  public getJobDetails(jobNumber: number): Promise<GetJobDetailsResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/project/${this.config.projectSlug}/job/${jobNumber}`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getJobArtifacts(jobNumber: number): Promise<GetJobArtifactsResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/project/${this.config.projectSlug}/${jobNumber}/artifacts`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getTests(jobNumber: number): Promise<GetTestsResponse> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/project/${this.config.projectSlug}/${jobNumber}/tests`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }
}
