import { CircleCI } from "../src/index";
import axios from "axios";
import { mockPipelineById, mockListPipelines } from "../__mocks__/mocks";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Pipelines", () => {
  let circleCI: CircleCI;

  beforeEach(() => {
    circleCI = new CircleCI({
      baseUrl: "test",
      projectSlug: "test",
      token: "test",
      auth: true,
      client: mockedAxios,
    });
  });
  test("it should return mock getPipelineById", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockPipelineById });

    const res = await circleCI.pipelines.getPipelineById("test");
    expect(res).toEqual(mockPipelineById);
  });

  test("it should return mock listPipelinesForProject", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockListPipelines });

    const res = await circleCI.pipelines.listPipelinesForProject("main", "page token");
    expect(res).toEqual(mockListPipelines);
  });
});
