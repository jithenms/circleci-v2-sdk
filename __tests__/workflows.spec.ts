import axios from "axios";
import { CircleCI, GitProviders } from "../src";
import { mockWorkflowById, mockWorkflowJobs } from "../__mocks__/mockWorkflows";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Workflows", () => {
  let circleCI: CircleCI;

  beforeEach(() => {
    circleCI = new CircleCI({
      baseUrl: "test",
      options: {
        gitProvider: GitProviders.GITHUB,
        username: "Jithen"
      },
      token: "test",
      client: mockedAxios,
    });
  });
  test("it should return mock getWorkflowById", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockWorkflowById });

    const res = await circleCI.workflows.getWorkflowById({ workflowId: "test id" });
    expect(res).toEqual(mockWorkflowById);
  });

  test("it should return mock listWorkflowJobs", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockWorkflowJobs });

    const res = await circleCI.workflows.listWorkflowJobs({ workflowId: "test id" });
    expect(res).toEqual(mockWorkflowJobs);
  })
});
