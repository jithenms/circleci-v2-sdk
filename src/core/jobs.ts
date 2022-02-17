import { AxiosError, AxiosResponse } from "axios";
import { CircleCIConfig } from "../config/config";
import {
  GetJobDetailsRequest,
  GetJobArtifactsRequest,
  GetTestsRequest,
  GetJobArtifactsResponse,
  GetJobDetailsResponse,
  GetTestsResponse,
} from "../types";
import { getProjectSlug } from "../util/util";

export class Jobs {
  private readonly config: CircleCIConfig;

  constructor(config: CircleCIConfig) {
    this.config = config;
  }

  public getJobDetails(
    { repo, jobNumber }: GetJobDetailsRequest
  ): Promise<GetJobDetailsResponse> {
    return new Promise((resolve, reject) => {
      const projectSlug = getProjectSlug(
        this.config.options.gitProvider,
        this.config.options.username,
        repo
      );
      this.config.client
        .get(`/project/${projectSlug}/job/${jobNumber}`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getJobArtifacts(
    { repo, jobNumber }: GetJobArtifactsRequest
  ): Promise<GetJobArtifactsResponse> {
    return new Promise((resolve, reject) => {
      const projectSlug = getProjectSlug(
        this.config.options.gitProvider,
        this.config.options.username,
        repo
      );
      this.config.client
        .get(`/project/${projectSlug}/${jobNumber}/artifacts`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getTests(
    { repo, jobNumber }: GetTestsRequest
  ): Promise<GetTestsResponse> {
    return new Promise((resolve, reject) => {
      const projectSlug = getProjectSlug(
        this.config.options.gitProvider,
        this.config.options.username,
        repo
      );
      this.config.client
        .get(`/project/${projectSlug}/${jobNumber}/tests`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }
}
