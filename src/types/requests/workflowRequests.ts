import { RerunWorkflowOptions } from "../options";

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
