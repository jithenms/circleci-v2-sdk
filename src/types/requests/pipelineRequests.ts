export type TriggerPipelineRequest = {
    /**
 * @description The project-slug for the pipeline
 * @example gh/CircleCI-Public/api-preview-docs
 */
    projectSlug: string
    /**
     * @description The branch where the pipeline ran. The HEAD commit on this branch was used for the pipeline. Note that `branch` and `tag` are mutually exclusive. To trigger a pipeline for a PR by number use `pull/<number>/head` for the PR ref or `pull/<number>/merge` for the merge ref (GitHub only).
     * @example feature/design-new-api
     */
    branch?: string;
    /**
     * @description The tag used by the pipeline. The commit that this tag points to was used for the pipeline. Note that `branch` and `tag` are mutually exclusive.
     * @example v3.1.4159
     */
    tag?: string;
    /**
     * @description An object containing pipeline parameters and their values.
     * @example [object Object]
     */
    parameters?: {
        [key: string]: Partial<number> | Partial<string> | Partial<boolean>;
    };
};

export type ListPipelinesRequest = {
    /** Org slug in the form `vcs-slug/org-name`. The `/` characters may be URL-escaped. */
    orgSlug?: string
    /** A token to retrieve the next page of results. */
    pageToken?: string;
    /** Only include entries created by your user. */
    mine?: boolean;
};

export type GetPipelineByIdRequest = {
    /** The unique ID of the pipeline. */
    pipelineId: string;
};


export type ContinuePipelineRequest = {
    /**
     * PipelineContinuationKey
     * @description A pipeline continuation key.
     */
    "continuation-key": string;
    /** @description A configuration string for the pipeline. */
    configuration: string;
    /**
     * @description An object containing pipeline parameters and their values.
     * @example [object Object]
     */
    parameters?: {
        [key: string]: Partial<number> | Partial<string> | Partial<boolean>;
    };
};

export type GetPipelineConfigByIdRequest = {
    /** The unique ID of the pipeline. */
    pipelineId: string;
};

export type ListWorkflowsByPipelineIdRequest = {
    /** The unique ID of the pipeline. */
    pipelineId: string;
    /** A token to retrieve the next page of results. */
    pageToken?: string;
};

export type ListPipelinesByProjectRequest = {
    /**
 * @description The project-slug for the pipeline
 * @example gh/CircleCI-Public/api-preview-docs
 */
    projectSlug: string
    /** The name of a vcs branch. */
    branch?: string;
    /** A token to retrieve the next page of results. */
    pageToken?: string;
};
export type GetPipelineByNumberRequest = {
    /**
 * @description The project-slug for the pipeline
 * @example gh/CircleCI-Public/api-preview-docs
 */
    projectSlug: string
    /** The number of the pipeline. */
    pipelineNumber: number;
};