import { Job, JobArtifactList, JobTestList } from "../src/types/data/jobData";

export const mockJobDetails: Job = {
    "web_url": "string",
    "project": {
        "slug": "gh/CircleCI-Public/api-preview-docs",
        "name": "api-preview-docs",
        "external_url": "https://github.com/CircleCI-Public/api-preview-docs"
    },
    "parallel_runs": [
        {
            "index": 0,
            "status": "string"
        }
    ],
    "started_at": "2019-08-24T14:15:22Z",
    "latest_workflow": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
        "name": "build-and-test"
    },
    "name": "string",
    "executor": {
        "resource_class": "string",
        "type": "string"
    },
    "parallelism": 0,
    "status": null,
    "number": 0,
    "pipeline": {
        "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08"
    },
    "duration": 0,
    "created_at": "2019-08-24T14:15:22Z",
    "messages": [
        {
            "type": "string",
            "message": "string",
            "reason": "string"
        }
    ],
    "contexts": [
        {
            "name": "string"
        }
    ],
    "organization": {
        "name": "string"
    },
    "queued_at": "2019-08-24T14:15:22Z",
    "stopped_at": "2019-08-24T14:15:22Z"
}

export const mockJobArtifacts: JobArtifactList = {
    "items": [
        {
            "path": "string",
            "node_index": 0,
            "url": "string"
        }
    ],
    "next_page_token": "string"
}

export const mockJobTests: JobTestList = {
    "items": [
        {
            "message": "",
            "source": "",
            "run_time": 0,
            "file": "",
            "result": "",
            "name": "",
            "classname": ""
        }
    ],
    "next_page_token": "string"
}