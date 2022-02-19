export type GenericJobRequest = {
    /**
 * @description The project-slug for the job
 * @example gh/CircleCI-Public/api-preview-docs
 */
    projectSlug: string
    /** The number of the job. */
    jobNumber: number;
}