import { CircleCI } from "../src/index";
import axios from "axios";
import {
  mockAddEnvToContext,
  mockCreateContext,
  mockDeleteContext,
  mockDeleteEnvFromContext,
  mockGetContext,
  mockListContexts,
  mockListEnvsFromContext,
} from "../__mocks__/mockContext";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Context", () => {
  let circleCI: CircleCI;

  beforeEach(() => {
    circleCI = new CircleCI({
      baseUrl: "test",
      options: {
        gitProvider: "gh",
        username: "Jithen",
      },
      token: "test",
      client: mockedAxios
    });
  });
  test("it should return mock listContexts", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockListContexts });

    const res = await circleCI.context.listContexts();
    expect(res).toEqual(mockListContexts);
  });

  test("it should return mock createContext", async () => {
    mockedAxios.post.mockResolvedValue({ data: mockCreateContext });

    const res = await circleCI.context.createContext({
      name: "sample",
      owner: {
        id: "123",
        type: "account",
      },
    });
    expect(res).toEqual(mockCreateContext);
  });

  test("it should return mock deleteContext", async () => {
    mockedAxios.delete.mockResolvedValue({ data: mockDeleteContext });

    const res = await circleCI.context.deleteContext({
      contextId: "123",
    });
    expect(res).toEqual(mockDeleteContext);
  });

  test("it should return mock getContext", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockGetContext });

    const res = await circleCI.context.getContext({
      contextId: "123",
    });
    expect(res).toEqual(mockGetContext);
  });

  test("it should return mock getContext", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockGetContext });

    const res = await circleCI.context.getContext({
      contextId: "123",
    });
    expect(res).toEqual(mockGetContext);
  });

  test("it should return mock listEnvironmentVariablesFromContext", async () => {
    mockedAxios.get.mockResolvedValue({ data: mockListEnvsFromContext });

    const res = await circleCI.context.listEnvironmentVariablesFromContext({
      contextId: "123",
    });
    expect(res).toEqual(mockListEnvsFromContext);
  });

  test("it should return mock deleteEnvironmentVariableFromContext", async () => {
    mockedAxios.delete.mockResolvedValue({ data: mockDeleteEnvFromContext });

    const res = await circleCI.context.deleteEnvironmentVariableFromContext({
      contextId: "123",
      envVarName: "sample",
    });
    expect(res).toEqual(mockDeleteEnvFromContext);
  });

  test("it should return mock addEnvironmentVariableToContext", async () => {
    mockedAxios.put.mockResolvedValue({ data: mockAddEnvToContext });

    const res = await circleCI.context.addEnvironmentVariableToContext({
      contextId: "123",
      envVarName: "sample",
      envValue: "secret",
    });
    expect(res).toEqual(mockAddEnvToContext);
  });
});
