import { GetPipelineByIdResponse, ListPipelinesByProjectResponse } from "../src/types";

export const mockPipelineById: GetPipelineByIdResponse = {
  id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
  errors: [
    {
      type: "config",
      message: "string"
    }
  ],
  project_slug: "gh/CircleCI-Public/api-preview-docs",
  updated_at: "2019-08-24T14:15:22Z",
  number: 0,
  trigger_parameters: {
    // TODO: Why never?
    property1: 0 as never,
    property2: 0 as never
  },
  state: "created",
  created_at: "2019-08-24T14:15:22Z",
  trigger: {
    type: "scheduled_pipeline",
    received_at: "2019-08-24T14:15:22Z",
    actor: {
      login: "string",
      avatar_url: "string"
    }
  },
  vcs: {
    provider_name: "GitHub",
    target_repository_url: "https://github.com/CircleCI-Public/api-preview-docs",
    branch: "feature/design-new-api",
    review_id: "123",
    review_url: "https://github.com/CircleCI-Public/api-preview-docs/pull/123",
    revision: "f454a02b5d10fcccfd7d9dd7608a76d6493a98b4",
    tag: "v3.1.4159",
    commit: {
      subject: "config",
      body: "string"
    },
    origin_repository_url: "https://github.com/CircleCI-Public/api-preview-docs"
  }
};

export const mockListPipelines: ListPipelinesByProjectResponse = {
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
        // TODO: Why never?
        "property1": 0 as never,
        "property2": 0 as never
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
};