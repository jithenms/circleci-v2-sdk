import { Message } from "../src/types/common";
import { Pipeline, PipelineConfig, PipelineList, TriggeredPipeline } from "../src/types/data/pipelineData";
import { WorkflowList } from "../src/types/data/workflowData";

export const mockPipelineById: Pipeline = {
  id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  errors: [
    {
      type: "config",
      message: "string",
    },
  ],
  project_slug: "gh/CircleCI-Public/api-preview-docs",
  updated_at: "2019-08-24T14:15:22Z",
  number: 0,
  trigger_parameters: {
    property1: 0,
    property2: 0,
  },
  state: "created",
  created_at: "2019-08-24T14:15:22Z",
  trigger: {
    type: "scheduled_pipeline",
    received_at: "2019-08-24T14:15:22Z",
    actor: {
      login: "string",
      avatar_url: "string",
    },
  },
  vcs: {
    provider_name: "GitHub",
    target_repository_url:
      "https://github.com/CircleCI-Public/api-preview-docs",
    branch: "feature/design-new-api",
    review_id: "123",
    review_url: "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
    revision: "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
    tag: "v3.1.4159",
    commit: {
      subject: "string",
      body: "string",
    },
    origin_repository_url:
      "https://github.com/CircleCI-Public/api-preview-docs",
  },
};

export const mockListPipelinesForProject: PipelineList = {
  items: [
    {
      id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      errors: [
        {
          type: "config",
          message: "string",
        },
      ],
      project_slug: "gh/CircleCI-Public/api-preview-docs",
      updated_at: "2019-08-24T14:15:22Z",
      number: 0,
      trigger_parameters: {
        // TODO: Why never?
        property1: 0 as never,
        property2: 0 as never,
      },
      state: "created",
      created_at: "2019-08-24T14:15:22Z",
      trigger: {
        type: "scheduled_pipeline",
        received_at: "2019-08-24T14:15:22Z",
        actor: {
          login: "string",
          avatar_url: "string",
        },
      },
      vcs: {
        provider_name: "GitHub",
        target_repository_url:
          "https://github.com/CircleCI-Public/api-preview-docs",
        branch: "feature/design-new-api",
        review_id: "123",
        review_url:
          "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
        revision: "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
        tag: "v3.1.4159",
        commit: {
          subject: "string",
          body: "string",
        },
        origin_repository_url:
          "https://github.com/CircleCI-Public/api-preview-docs",
      },
    },
  ],
  next_page_token: "string",
};

export const mockTriggerPipeline: TriggeredPipeline = {
  id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  state: "created",
  number: 0,
  created_at: "2019-08-24T14:15:22Z",
};

export const mockContinuePipeline: Message = {
  message: "string",
};

export const mockPipelineConfigById: PipelineConfig = {
  source: "string",
  compiled: "string",
  "setup-config": "string",
  "compiled-setup-config": "string",
};

export const mockListWorkflowsByPipelineId: WorkflowList = {
  "items": [
    {
      "pipeline_id": "ec036e81-7903-4e4d-bbfa-ac8516341cf0",
      "canceled_by": "026a6d28-c22e-4aab-a8b4-bd7131a8ea35",
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "name": "build-and-test",
      "project_slug": "gh/CircleCI-Public/api-preview-docs",
      "errored_by": "c6e40f70-a80a-4ccc-af88-8d985a7bc622",
      "tag": "setup",
      "status": "success",
      "started_by": "03987f6a-4c27-4dc1-b6ab-c7e83bb3e713",
      "pipeline_number": 0,
      "created_at": "2019-08-24T14:15:22Z",
      "stopped_at": "2019-08-24T14:15:22Z"
    }
  ],
  "next_page_token": "string"
}

export const mockListPipelines: PipelineList = {
  "items": [
    {
      "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      "errors": [
        {
          "type": "config",
          "message": "string"
        }
      ],
      "project_slug": "gh/CircleCI-Public/api-preview-docs",
      "updated_at": "2019-08-24T14:15:22Z",
      "number": 0,
      "trigger_parameters": {
        "property1": 0,
        "property2": 0
      },
      "state": "created",
      "created_at": "2019-08-24T14:15:22Z",
      "trigger": {
        "type": "scheduled_pipeline",
        "received_at": "2019-08-24T14:15:22Z",
        "actor": {
          "login": "string",
          "avatar_url": "string"
        }
      },
      "vcs": {
        "provider_name": "GitHub",
        "target_repository_url": "https://github.com/CircleCI-Public/api-preview-docs",
        "branch": "feature/design-new-api",
        "review_id": "123",
        "review_url": "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
        "revision": "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
        "tag": "v3.1.4159",
        "commit": {
          "subject": "string",
          "body": "string"
        },
        "origin_repository_url": "https://github.com/CircleCI-Public/api-preview-docs"
      }
    }
  ],
  "next_page_token": "string"
}

export const mockPipelineByNumber: Pipeline = {
  "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  "errors": [
    {
      "type": "config",
      "message": "string"
    }
  ],
  "project_slug": "gh/CircleCI-Public/api-preview-docs",
  "updated_at": "2019-08-24T14:15:22Z",
  "number": 0,
  "trigger_parameters": {
    "property1": 0,
    "property2": 0
  },
  "state": "created",
  "created_at": "2019-08-24T14:15:22Z",
  "trigger": {
    "type": "scheduled_pipeline",
    "received_at": "2019-08-24T14:15:22Z",
    "actor": {
      "login": "string",
      "avatar_url": "string"
    }
  },
  "vcs": {
    "provider_name": "GitHub",
    "target_repository_url": "https://github.com/CircleCI-Public/api-preview-docs",
    "branch": "feature/design-new-api",
    "review_id": "123",
    "review_url": "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
    "revision": "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
    "tag": "v3.1.4159",
    "commit": {
      "subject": "string",
      "body": "string"
    },
    "origin_repository_url": "https://github.com/CircleCI-Public/api-preview-docs"
  }
}