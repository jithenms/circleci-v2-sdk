import { CircleCI } from "../src/index";
import axios from "axios";
import {
  mockJobArtifacts,
  mockJobDetails,
  mockJobTests,
} from "../__mocks__/mockJobs";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Jobs", () => {
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
  test("it should return mock getJobDetails", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockJobDetails });

    const res = await circleCI.jobs.getJobDetails({
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      jobNumber: 123
    });
    expect(res).toEqual(mockJobDetails);
  });

  test("it should return mock getJobArtifacts", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockJobArtifacts });

    const res = await circleCI.jobs.getJobArtifacts({
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      jobNumber: 123,
    });
    expect(res).toEqual(mockJobArtifacts);
  });

  test("it should return mock getTests", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockJobTests });

    const res = await circleCI.jobs.getTests({
      projectSlug: "gh/CircleCI-Public/api-preview-docs",
      jobNumber: 123,
    });
    expect(res).toEqual(mockJobTests);
  });
});
