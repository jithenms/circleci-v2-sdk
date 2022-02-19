import { Error, Trigger, TriggerParams, VCS } from "../common";

export type Pipeline = {
    /**
 * Format: uuid
 * @description The unique ID of the pipeline.
 */
    id: string;
    /** @description A sequence of errors that have occurred within the pipeline. */
    errors: Error[];
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
    trigger_parameters?: TriggerParams
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
    trigger: Trigger
    /** @description VCS information for the pipeline. */
    vcs?: VCS
}

export type PipelineList = {
    items: Pipeline[]
    /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
    next_page_token: string;
}

export type TriggeredPipeline = {
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

export type PipelineConfig = {
    /** @description The source configuration for the pipeline, before any config compilation has been performed. If there is no config, then this field will be empty. */
    source: string;
    /** @description The compiled configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's configuration, then this field may be empty. */
    compiled: string;
    /** @description The setup configuration for the pipeline used for Setup Workflows. If there were errors processing the pipeline's configuration or if setup workflows are not enabled, then this field should not exist */
    "setup-config"?: string;
    /** @description The compiled setup configuration for the pipeline, after all orb expansion has been performed. If there were errors processing the pipeline's setup workflows, then this field may be empty. */
    "compiled-setup-config"?: string;
}
