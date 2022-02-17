export type RerunWorkflowOptions = {
  /** @description Whether to enable SSH access for the triggering user on the newly-rerun job. Requires the jobs parameter to be used and so is mutually exclusive with the from_failed parameter. */
  enable_ssh?: boolean;
  /** @description Whether to rerun the workflow from the failed job. Mutually exclusive with the jobs parameter. */
  from_failed?: boolean;
  /**
   * @description A list of job IDs to rerun.
   * @example c65b68ef-e73b-4bf2-be9a-7a322a9df150,5e957edd-5e8c-4985-9178-5d0d69561822
   */
  jobs?: string[];
  /** @description Completes rerun using sparse trees logic, an optimization for workflows that have disconnected subgraphs. Requires jobs parameter and so is mutually exclusive with the from_failed parameter. */
  sparse_tree?: boolean;
}
