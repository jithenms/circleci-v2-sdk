import { CircleCI } from "../src/index";
import axios from "axios";
import { GitProviders } from "../src/config";
import {
  mockPipelineById,
  mockListPipelines,
  mockTriggerPipeline,
} from "../__mocks__/mockPipelines";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Pipelines", () => {
  let circleCI: CircleCI;

  beforeEach(() => {
    circleCI = new CircleCI({
      baseUrl: "test",
      options: {
        gitProvider: GitProviders.GITHUB,
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

  test("it should return mock listPipelinesForProject", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockListPipelines });

    const res = await circleCI.pipelines.listPipelinesForProject({
      repo: "circleci-v2-sdk",
      branch: "main",
      pageToken: "page token"

    });
    expect(res).toEqual(mockListPipelines);
  });

  test("it should return mock triggerPipeline", async () => {
    mockedAxios.post.mockResolvedValue({ data: mockTriggerPipeline });

    const res = await circleCI.pipelines.triggerPipeline({
      repo: "circleci-v2-sdk",
      branch: "main",
      tag: "1.0.0",
      parameters: { environment: "test", prop: "hello" }
    });
    expect(res).toEqual(mockTriggerPipeline);
  });
});
