import { CircleCI } from "../src/index";
import axios from "axios";
import {
  mockPipelineById,
  mockListPipelinesForProject,
  mockListPipelines,
  mockTriggerPipeline,
  mockContinuePipeline,
  mockPipelineConfigById,
  mockListWorkflowsByPipelineId,
  mockPipelineByNumber
} from "../__mocks__/mockPipelines";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Pipelines", () => {
  let circleCI: CircleCI;

  beforeEach(() => {
    circleCI = new CircleCI({
      baseUrl: "test",
      options: {
        gitProvider: "gh",
        username: "Jithen",
      },
      token: "test",
      client: mockedAxios,
    });
  });
  test("it should return mock getPipelineById", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockPipelineById });

    const res = await circleCI.pipelines.getPipelineById({ pipelineId: "test" });
    expect(res).toEqual(mockPipelineById);
  });

  test("it should return mock listPipelines", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockListPipelines });

    const res = await circleCI.pipelines.listPipelines();
    expect(res).toEqual(mockListPipelines);
  });

  test("it should return mock triggerPipeline", async () => {
    mockedAxios.post.mockResolvedValue({ data: mockTriggerPipeline });

    const res = await circleCI.pipelines.triggerPipeline({
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      branch: "main",
      tag: "1.0.0",
      parameters: { environment: "test", prop: "hello" }
    });
    expect(res).toEqual(mockTriggerPipeline);
  });

  test("it should return mock continuePipeline", async () => {
    mockedAxios.post.mockResolvedValue({ data: mockContinuePipeline });
    const res = await circleCI.pipelines.continuePipeline({
      'continuation-key': "key",
      configuration: "config",
      parameters: { environment: "test", prop: "hello" }
    });
    expect(res).toEqual(mockContinuePipeline);
  })

  test("it should return mock getPipelineConfigById", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockPipelineConfigById });
    const res = await circleCI.pipelines.getPipelineConfigById({
      pipelineId: "id"
    });
    expect(res).toEqual(mockPipelineConfigById);
  })

  test("it should return mock listWorkflowsByPipelineId", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockListWorkflowsByPipelineId });
    const res = await circleCI.pipelines.listWorkflowsByPipelineId({
      pipelineId: "id",
      pageToken: "token"
    });
    expect(res).toEqual(mockListWorkflowsByPipelineId);
  })

  test("it should return mock listPipelinesForProject", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockListPipelinesForProject });
    const res = await circleCI.pipelines.listPipelinesForProject({
      pageToken: "token",
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
    });
    expect(res).toEqual(mockListPipelinesForProject);
  })

  test("it should return mock getPipelineByNumber", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockPipelineByNumber });
    const res = await circleCI.pipelines.getPipelineByNumber({
      pipelineNumber: 1,
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
    });
    expect(res).toEqual(mockPipelineByNumber);
  })
});
