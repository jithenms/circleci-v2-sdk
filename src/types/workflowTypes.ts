import { RerunWorkflowOptions } from "./options";

export type GetWorkflowByIdRequest = {
  /** The unique ID of the workflow. */
  workflowId: string
}

export type ListWorkflowJobsRequest = {
  /** The unique ID of the workflow. */
  workflowId: string
}

export type RerunWorkflowRequest = {
  /** The unique ID of the workflow. */
  workflowId: string,
  /** Options for rerunning workflow */
  options?: RerunWorkflowOptions
}

export type GetWorkflowByIdResponse = {
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
  tag?: "setup";
  /**
   * @description The current status of the workflow.
   * @enum {string}
   */
  status:
  | "success"
  | "running"
  | "not_run"
  | "failed"
  | "error"
  | "failing"
  | "on_hold"
  | "canceled"
  | "unauthorized";
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
}

export type ListWorkflowJobsResponse = {
  items: {
    /**
     * Format: uuid
     * @description The unique ID of the user.
     */
    canceled_by?: string;
    /** @description A sequence of the unique job IDs for the jobs that this job depends upon in the workflow. */
    dependencies: string[];
    /**
     * Format: int64
     * @description The number of the job.
     */
    job_number?: number;
    /**
     * Format: uuid
     * @description The unique ID of the job.
     */
    id: string;
    /**
     * Format: date-time
     * @description The date and time the job started.
     */
    started_at: string;
    /** @description The name of the job. */
    name: string;
    /**
     * Format: uuid
     * @description The unique ID of the user.
     */
    approved_by?: string;
    /**
     * @description The project-slug for the job.
     * @example gh/CircleCI-Public/api-preview-docs
     */
    project_slug: string;
    /** @description The current status of the job. */
    status: string | null;
    /**
     * @description The type of job.
     * @enum {string}
     */
    type: "build" | "approval";
    /**
     * Format: date-time
     * @description The time when the job stopped.
     */
    stopped_at?: string;
    /**
     * Format: uuid
     * @description The unique ID of the job.
     */
    approval_request_id?: string;
  }[];
  /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
  next_page_token: string;
}

export type RerunWorkflowResponse = {
  /**
   * Format: uuid
   * @description The ID of the newly-created workflow.
   * @example 0e53027b-521a-4c40-9042-47e72b3c63a3
   */
  workflow_id: string;
}
