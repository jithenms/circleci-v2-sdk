import { Workflow, WorkflowInfo, WorkflowJobList } from "../src/types/data/workflowData";

export const mockWorkflowById: Workflow = {
    pipeline_id: "ec036e81-7903-4e4d-bbfa-ac8516341cf0",
    canceled_by: "026a6d28-c22e-4aab-a8b4-bd7131a8ea35",
    id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    name: "build-and-test",
    project_slug: "gh/CircleCI-Public/api-preview-docs",
    errored_by: "c6e40f70-a80a-4ccc-af88-8d985a7bc622",
    tag: "setup",
    status: "success",
    started_by: "03987f6a-4c27-4dc1-b6ab-c7e83bb3e713",
    pipeline_number: 0,
    created_at: "2019-08-24T14:15:22Z",
    stopped_at: "2019-08-24T14:15:22Z",
};

export const mockWorkflowJobs: WorkflowJobList = {
    "items": [
        {
            "canceled_by": "026a6d28-c22e-4aab-a8b4-bd7131a8ea35",
            "dependencies": [
                "497f6eca-6276-4993-bfeb-53cbbbba6f08"
            ],
            "job_number": 0,
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "started_at": "2019-08-24T14:15:22Z",
            "name": "string",
            "approved_by": "02030314-b162-4b4d-8af1-88eabdcc615d",
            "project_slug": "gh/CircleCI-Public/api-preview-docs",
            "status": null,
            "type": "build",
            "stopped_at": "2019-08-24T14:15:22Z",
            "approval_request_id": "47bbf9d9-0b01-4281-9b67-9324ae3d0dff"
        }
    ],
    "next_page_token": "string"
}

export const mockRerunWorkflow: WorkflowInfo = {
    "workflow_id": "0e53027b-521a-4c40-9042-47e72b3c63a3"
}