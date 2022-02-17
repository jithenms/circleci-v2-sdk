export type TriggerPipelineRequest = {
  /**
 * @description The repository name of where the pipeline ran.
 * @example circleci-v2-sdk
 */
  repo: string,
  /**
   * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
   * @example feature/design-new-api
   */
  branch?: string,
  /**
   * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
   * @example v3.1.4159
   */
  tag?: string,
  /**
   * @description An object containing pipeline parameters and their values.
   * @example [object Object]
   */
  parameters?: {
    [key: string]: Partial<number> | Partial<string> | Partial<boolean>;
  }
}

export type ListPipelinesByProjectRequest = {
  /**
 * @description The repository name of where the pipeline ran.
 * @example circleci-v2-sdk
 */
  repo: string,
  /** The name of a vcs branch. */
  branch?: string,
  /** A token to retrieve the next page of results. */
  pageToken?: string
}

export type GetPipelineByIdRequest = {
  /** The unique ID of the pipeline. */
  pipelineId: string
}

export type TriggerPipelineResponse = {
  /**
   * Format: uuid
   * @description The unique ID of the pipeline.
   */
  id: string;
  /**
   * @description The current state of the pipeline.
   * @enum {string}
   */
  state: "created" | "errored" | "setup-pending" | "setup" | "pending";
  /**
   * Format: int64
   * @description The number of the pipeline.
   */
  number: number;
  /**
   * Format: date-time
   * @description The date and time the pipeline was created.
   */
  created_at: string;
}

export type ListPipelinesByProjectResponse = {
  items: {
    /**
     * Format: uuid
     * @description The unique ID of the pipeline.
     */
    id: string;
    /** @description A sequence of errors that have occurred within the pipeline. */
    errors: {
      /**
       * @description The type of error.
       * @enum {string}
       */
      type: "config" | "config-fetch" | "timeout" | "permission" | "plan";
      /** @description A human-readable error message. */
      message: string;
    }[];
    /**
     * @description The project-slug for the pipeline.
     * @example gh/CircleCI-Public/api-preview-docs
     */
    project_slug: string;
    /**
     * Format: date-time
     * @description The date and time the pipeline was last updated.
     */
    updated_at?: string;
    /**
     * Format: int64
     * @description The number of the pipeline.
     */
    number: number;
    trigger_parameters?: {
      [key: string]: Partial<number> |
      Partial<string> |
      Partial<boolean> |
      Partial<{ [key: string]: unknown }>;
    };
    /**
     * @description The current state of the pipeline.
     * @enum {string}
     */
    state: "created" | "errored" | "setup-pending" | "setup" | "pending";
    /**
     * Format: date-time
     * @description The date and time the pipeline was created.
     */
    created_at: string;
    /** @description A summary of the trigger. */
    trigger: {
      /**
       * @description The type of trigger.
       * @enum {string}
       */
      type: "scheduled_pipeline" | "explicit" | "api" | "webhook";
      /**
       * Format: date-time
       * @description The date and time the trigger was received.
       */
      received_at: string;
      /** @description The user who triggered the Pipeline. */
      actor: {
        /**
         * Login
         * @description The login information for the user on the VCS.
         */
        login: string;
        /** @description URL to the user's avatar on the VCS */
        avatar_url: string;
      };
    };
    /** @description VCS information for the pipeline. */
    vcs?: {
      /**
       * @description Name of the VCS provider (e.g. GitHub, Bitbucket).
       * @example GitHub
       */
      provider_name: string;
      /**
       * @description URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
       * @example https://github.com/CircleCI-Public/api-preview-docs
       */
      target_repository_url: string;
      /**
       * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
       * @example feature/design-new-api
       */
      branch?: string;
      /**
       * @description The code review id.
       * @example 123
       */
      review_id?: string;
      /**
       * @description The code review URL.
       * @example https://github.com/CircleCI-Public/api-preview-docs/pull/123
       */
      review_url?: string;
      /**
       * @description The code revision the pipeline ran.
       * @example f454a02b5d10fcccfd7d9dd7608a76d6493a98b4
       */
      revision: string;
      /**
       * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
       * @example v3.1.4159
       */
      tag?: string;
      /** @description The latest commit in the pipeline. */
      commit?: {
        /** @description The subject of the commit message. */
        subject: string;
        /** @description The body of the commit message. */
        body: string;
      };
      /**
       * @description URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
       * @example https://github.com/CircleCI-Public/api-preview-docs
       */
      origin_repository_url: string;
    };
  }[];
  /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
  next_page_token: string;
}

export type GetPipelineByIdResponse = {
  /**
           * Format: uuid
           * @description The unique ID of the pipeline.
           */
  id: string;
  /** @description A sequence of errors that have occurred within the pipeline. */
  errors: {
    /**
     * @description The type of error.
     * @enum {string}
     */
    type:
    | 'config'
    | 'config-fetch'
    | 'timeout'
    | 'permission'
    | 'plan';
    /** @description A human-readable error message. */
    message: string;
  }[];
  /**
   * @description The project-slug for the pipeline.
   * @example gh/CircleCI-Public/api-preview-docs
   */
  project_slug: string;
  /**
   * Format: date-time
   * @description The date and time the pipeline was last updated.
   */
  updated_at?: string;
  /**
   * Format: int64
   * @description The number of the pipeline.
   */
  number: number;
  trigger_parameters?: {
    [key: string]: Partial<number> |
    Partial<string> |
    Partial<boolean> |
    Partial<{ [key: string]: unknown }>;
  };
  /**
   * @description The current state of the pipeline.
   * @enum {string}
   */
  state:
  | 'created'
  | 'errored'
  | 'setup-pending'
  | 'setup'
  | 'pending';
  /**
   * Format: date-time
   * @description The date and time the pipeline was created.
   */
  created_at: string;
  /** @description A summary of the trigger. */
  trigger: {
    /**
     * @description The type of trigger.
     * @enum {string}
     */
    type: 'scheduled_pipeline' | 'explicit' | 'api' | 'webhook';
    /**
     * Format: date-time
     * @description The date and time the trigger was received.
     */
    received_at: string;
    /** @description The user who triggered the Pipeline. */
    actor: {
      /**
       * Login
       * @description The login information for the user on the VCS.
       */
      login: string;
      /** @description URL to the user's avatar on the VCS */
      avatar_url: string;
    };
  };
  /** @description VCS information for the pipeline. */
  vcs?: {
    /**
     * @description Name of the VCS provider (e.g. GitHub, Bitbucket).
     * @example GitHub
     */
    provider_name: string;
    /**
     * @description URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
     * @example https://github.com/CircleCI-Public/api-preview-docs
     */
    target_repository_url: string;
    /**
     * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
     * @example feature/design-new-api
     */
    branch?: string;
    /**
     * @description The code review id.
     * @example 123
     */
    review_id?: string;
    /**
     * @description The code review URL.
     * @example https://github.com/CircleCI-Public/api-preview-docs/pull/123
     */
    review_url?: string;
    /**
     * @description The code revision the pipeline ran.
     * @example f454a02b5d10fcccfd7d9dd7608a76d6493a98b4
     */
    revision: string;
    /**
     * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
     * @example v3.1.4159
     */
    tag?: string;
    /** @description The latest commit in the pipeline. */
    commit?: {
      /** @description The subject of the commit message. */
      subject: string;
      /** @description The body of the commit message. */
      body: string;
    };
    /**
     * @description URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
     * @example https://github.com/CircleCI-Public/api-preview-docs
     */
    origin_repository_url: string;
  };
}

export type ContinuePipelineRequest = {
  /**
           * PipelineContinuationKey
           * @description A pipeline continuation key.
           */
  'continuation-key': string;
  /** @description A configuration string for the pipeline. */
  configuration: string;
  /**
   * @description An object containing pipeline parameters and their values.
   * @example [object Object]
   */
  parameters?: {
    [key: string]: Partial<number> | Partial<string> | Partial<boolean>;
  };
}

export type ContinuePipelineResponse = {
  /** @description A human-readable message */
  message: string;
}

export type GetPipelineConfigByIdRequest = {
  /** The unique ID of the pipeline. */
  pipelineId: string;
}

export type GetPipelineConfigByIdResponse = {
  /** @description The source configuration for the pipeline, before any config compilation has been performed. If there is no config, then this field will be empty. */
  source: string;
  /** @description The compiled configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's configuration, then this field may be empty. */
  compiled: string;
  /** @description The setup configuration for the pipeline used for Setup Workflows. If there were errors processing the pipeline's configuration or if setup workflows are not enabled, then this field should not exist */
  'setup-config'?: string;
  /** @description The compiled setup configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's setup workflows, then this field may be empty. */
  'compiled-setup-config'?: string;
}

export type ListWorkflowsByPipelineIdRequest = {
  /** The unique ID of the pipeline. */
  pipelineId: string;
  /** A token to retrieve the next page of results. */
  pageToken?: string;
}

export type ListWorkflowsByPipelineIdResponse = {
  /**
             * Workflow list
             * @description A list of workflows.
             */
  items: {
    /**
     * Format: uuid
     * @description The ID of the pipeline this workflow belongs to.
     */
    pipeline_id: string;
    /** Format: uuid */
    canceled_by?: string;
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
    /**
     * @description The project-slug for the pipeline this workflow belongs to.
     * @example gh/CircleCI-Public/api-preview-docs
     */
    project_slug: string;
    /** Format: uuid */
    errored_by?: string;
    /**
     * @description Tag used for the workflow
     * @example setup
     * @enum {string}
     */
    tag?: 'setup';
    /**
     * @description The current status of the workflow.
     * @enum {string}
     */
    status:
    | 'success'
    | 'running'
    | 'not_run'
    | 'failed'
    | 'error'
    | 'failing'
    | 'on_hold'
    | 'canceled'
    | 'unauthorized';
    /** Format: uuid */
    started_by: string;
    /**
     * Format: int64
     * @description The number of the pipeline this workflow belongs to.
     */
    pipeline_number: number;
    /**
     * Format: date-time
     * @description The date and time the workflow was created.
     */
    created_at: string;
    /**
     * Format: date-time
     * @description The date and time the workflow stopped.
     */
    stopped_at: string;
  }[];
  /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
  next_page_token: string;
}

export type ListPipelinesRequest = {
  /** A token to retrieve the next page of results. */
  pageToken?: string;
  /** Only include entries created by your user. */
  mine?: boolean;
}

export type ListPipelinesResponse = {
  items: {
    /**
     * Format: uuid
     * @description The unique ID of the pipeline.
     */
    id: string;
    /** @description A sequence of errors that have occurred within the pipeline. */
    errors: {
      /**
       * @description The type of error.
       * @enum {string}
       */
      type:
      | 'config'
      | 'config-fetch'
      | 'timeout'
      | 'permission'
      | 'plan';
      /** @description A human-readable error message. */
      message: string;
    }[];
    /**
     * @description The project-slug for the pipeline.
     * @example gh/CircleCI-Public/api-preview-docs
     */
    project_slug: string;
    /**
     * Format: date-time
     * @description The date and time the pipeline was last updated.
     */
    updated_at?: string;
    /**
     * Format: int64
     * @description The number of the pipeline.
     */
    number: number;
    trigger_parameters?: {
      [key: string]: Partial<number> |
      Partial<string> |
      Partial<boolean> |
      Partial<{ [key: string]: unknown }>;
    };
    /**
     * @description The current state of the pipeline.
     * @enum {string}
     */
    state:
    | 'created'
    | 'errored'
    | 'setup-pending'
    | 'setup'
    | 'pending';
    /**
     * Format: date-time
     * @description The date and time the pipeline was created.
     */
    created_at: string;
    /** @description A summary of the trigger. */
    trigger: {
      /**
       * @description The type of trigger.
       * @enum {string}
       */
      type: 'scheduled_pipeline' | 'explicit' | 'api' | 'webhook';
      /**
       * Format: date-time
       * @description The date and time the trigger was received.
       */
      received_at: string;
      /** @description The user who triggered the Pipeline. */
      actor: {
        /**
         * Login
         * @description The login information for the user on the VCS.
         */
        login: string;
        /** @description URL to the user's avatar on the VCS */
        avatar_url: string;
      };
    };
    /** @description VCS information for the pipeline. */
    vcs?: {
      /**
       * @description Name of the VCS provider (e.g. GitHub, Bitbucket).
       * @example GitHub
       */
      provider_name: string;
      /**
       * @description URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
       * @example https://github.com/CircleCI-Public/api-preview-docs
       */
      target_repository_url: string;
      /**
       * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
       * @example feature/design-new-api
       */
      branch?: string;
      /**
       * @description The code review id.
       * @example 123
       */
      review_id?: string;
      /**
       * @description The code review URL.
       * @example https://github.com/CircleCI-Public/api-preview-docs/pull/123
       */
      review_url?: string;
      /**
       * @description The code revision the pipeline ran.
       * @example f454a02b5d10fcccfd7d9dd7608a76d6493a98b4
       */
      revision: string;
      /**
       * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
       * @example v3.1.4159
       */
      tag?: string;
      /** @description The latest commit in the pipeline. */
      commit?: {
        /** @description The subject of the commit message. */
        subject: string;
        /** @description The body of the commit message. */
        body: string;
      };
      /**
       * @description URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
       * @example https://github.com/CircleCI-Public/api-preview-docs
       */
      origin_repository_url: string;
    };
  }[];
  /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
  next_page_token: string;
}

export type GetPipelineByNumberRequest = {
  /**
* @description The repository name of where the pipeline ran.
* @example circleci-v2-sdk
*/
  repo: string,
  /** Project slug in the form `vcs-slug/org-name/repo-name`. The `/` characters may be URL-escaped. */
  projectSlug: string;
  /** The number of the pipeline. */
  pipelineNumber: number;
}

export type GetPipelineByNumberResponse = {
  /**
             * Format: uuid
             * @description The unique ID of the pipeline.
             */
  id: string;
  /** @description A sequence of errors that have occurred within the pipeline. */
  errors: {
    /**
     * @description The type of error.
     * @enum {string}
     */
    type:
    | 'config'
    | 'config-fetch'
    | 'timeout'
    | 'permission'
    | 'plan';
    /** @description A human-readable error message. */
    message: string;
  }[];
  /**
   * @description The project-slug for the pipeline.
   * @example gh/CircleCI-Public/api-preview-docs
   */
  project_slug: string;
  /**
   * Format: date-time
   * @description The date and time the pipeline was last updated.
   */
  updated_at?: string;
  /**
   * Format: int64
   * @description The number of the pipeline.
   */
  number: number;
  trigger_parameters?: {
    [key: string]: Partial<number> |
    Partial<string> |
    Partial<boolean> |
    Partial<{ [key: string]: unknown }>;
  };
  /**
   * @description The current state of the pipeline.
   * @enum {string}
   */
  state:
  | 'created'
  | 'errored'
  | 'setup-pending'
  | 'setup'
  | 'pending';
  /**
   * Format: date-time
   * @description The date and time the pipeline was created.
   */
  created_at: string;
  /** @description A summary of the trigger. */
  trigger: {
    /**
     * @description The type of trigger.
     * @enum {string}
     */
    type: 'scheduled_pipeline' | 'explicit' | 'api' | 'webhook';
    /**
     * Format: date-time
     * @description The date and time the trigger was received.
     */
    received_at: string;
    /** @description The user who triggered the Pipeline. */
    actor: {
      /**
       * Login
       * @description The login information for the user on the VCS.
       */
      login: string;
      /** @description URL to the user's avatar on the VCS */
      avatar_url: string;
    };
  };
  /** @description VCS information for the pipeline. */
  vcs?: {
    /**
     * @description Name of the VCS provider (e.g. GitHub, Bitbucket).
     * @example GitHub
     */
    provider_name: string;
    /**
     * @description URL for the repository the trigger targets (i.e. the repository where the PR will be merged). For fork-PR pipelines, this is the URL to the parent repo. For other pipelines, the `origin_` and `target_repository_url`s will be the same.
     * @example https://github.com/CircleCI-Public/api-preview-docs
     */
    target_repository_url: string;
    /**
     * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
     * @example feature/design-new-api
     */
    branch?: string;
    /**
     * @description The code review id.
     * @example 123
     */
    review_id?: string;
    /**
     * @description The code review URL.
     * @example https://github.com/CircleCI-Public/api-preview-docs/pull/123
     */
    review_url?: string;
    /**
     * @description The code revision the pipeline ran.
     * @example f454a02b5d10fcccfd7d9dd7608a76d6493a98b4
     */
    revision: string;
    /**
     * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
     * @example v3.1.4159
     */
    tag?: string;
    /** @description The latest commit in the pipeline. */
    commit?: {
      /** @description The subject of the commit message. */
      subject: string;
      /** @description The body of the commit message. */
      body: string;
    };
    /**
     * @description URL for the repository where the trigger originated. For fork-PR pipelines, this is the URL to the fork. For other pipelines the `origin_` and `target_repository_url`s will be the same.
     * @example https://github.com/CircleCI-Public/api-preview-docs
     */
    origin_repository_url: string;
  }
}