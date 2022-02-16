export interface GetJobDetailsResponse {
  /** @description URL of the job in CircleCI Web UI. */
  web_url: string;
  /** @description Information about a project. */
  project: {
    /**
     * @description Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped.
     * @example gh/CircleCI-Public/api-preview-docs
     */
    slug: string;
    /**
     * @description The name of the project
     * @example api-preview-docs
     */
    name: string;
    /**
     * @description URL to the repository hosting the project's code
     * @example https://github.com/CircleCI-Public/api-preview-docs
     */
    external_url: string;
  };
  /** @description Info about parallels runs and their status. */
  parallel_runs: {
    /**
     * Format: int64
     * @description Index of the parallel run.
     */
    index: number;
    /** @description Status of the parallel run. */
    status: string;
  }[];
  /**
   * Format: date-time
   * @description The date and time the job started.
   */
  started_at: string;
  /** @description Info about the latest workflow the job was a part of. */
  latest_workflow: {
    /**
     * Format: uuid
     * @description The unique ID of the workflow.
     */
    id: string;
    /**
     * @description The name of the workflow.
     * @example build-and-test
     */
    name: string;
  };
  /** @description The name of the job. */
  name: string;
  /** @description Information about executor used for a job. */
  executor: {
    /** @description Resource class name. */
    resource_class: string;
    /** @description Executor type. */
    type?: string;
  };
  /**
   * Format: int64
   * @description A number of parallel runs the job has.
   */
  parallelism: number;
  /** @description The current status of the job. */
  status: unknown;
  /**
   * Format: int64
   * @description The number of the job.
   */
  number: number;
  /** @description Info about a pipeline the job is a part of. */
  pipeline: {
    /**
     * Format: uuid
     * @description The unique ID of the pipeline.
     */
    id: string;
  };
  /**
   * Format: int64
   * @description Duration of a job in milliseconds.
   */
  duration: number;
  /**
   * Format: date-time
   * @description The time when the job was created.
   */
  created_at: string;
  /** @description Messages from CircleCI execution platform. */
  messages: {
    /** @description Message type. */
    type: string;
    /** @description Information describing message. */
    message: string;
    /** @description Value describing the reason for message to be added to the job. */
    reason?: string;
  }[];
  /** @description List of contexts used by the job. */
  contexts: {
    /** @description The name of the context. */
    name: string;
  }[];
  /** @description Information about an organization. */
  organization: {
    /** @description The name of the organization. */
    name: string;
  };
  /**
   * Format: date-time
   * @description The time when the job was placed in a queue.
   */
  queued_at: string;
  /**
   * Format: date-time
   * @description The time when the job stopped.
   */
  stopped_at?: string;
}

export interface GetJobArtifactsResponse {
  items: {
    /** @description The artifact path. */
    path: string;
    /**
     * Format: int64
     * @description The index of the node that stored the artifact.
     */
    node_index: number;
    /** @description The URL to download the artifact contents. */
    url: string;
  }[];
  /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
  next_page_token: string;
}

export interface GetTestsResponse {
  /** TestsResponse */
  items: {
    /** @description The failure message associated with the test. */
    message: string;
    /** @description The program that generated the test results */
    source: string;
    /**
     * Format: double
     * @description The time it took to run the test in seconds
     */
    run_time: number;
    /** @description The file in which the test is defined. */
    file: string;
    /** @description Indication of whether the test succeeded. */
    result: string;
    /** @description The name of the test. */
    name: string;
    /** @description The programmatic location of the test. */
    classname: string;
  }[];
  /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
  next_page_token: string;
}
