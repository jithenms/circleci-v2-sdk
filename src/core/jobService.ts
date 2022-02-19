import { AxiosError, AxiosResponse } from "axios";
import { CircleCIConfig } from "../config/config";
import { Job, JobArtifactList, JobTestList } from "../types/data/jobData";
import { GenericJobRequest } from "../types/requests/jobRequests";

export class JobService {
  private readonly config: CircleCIConfig;

  constructor(config: CircleCIConfig) {
    this.config = config;
  }

  public getJobDetails(
    { projectSlug, jobNumber }: GenericJobRequest
  ): Promise<Job> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/project/${projectSlug}/job/${jobNumber}`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getJobArtifacts(
    { projectSlug, jobNumber }: GenericJobRequest
  ): Promise<JobArtifactList> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/project/${projectSlug}/${jobNumber}/artifacts`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }

  public getTests(
    { projectSlug, jobNumber }: GenericJobRequest
  ): Promise<JobTestList> {
    return new Promise((resolve, reject) => {
      this.config.client
        .get(`/project/${projectSlug}/${jobNumber}/tests`)
        .then((res: AxiosResponse) => resolve(res.data))
        .catch((error: AxiosError) => reject(error));
    });
  }
}
