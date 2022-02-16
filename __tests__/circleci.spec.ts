import axios from "axios";
import { CircleCI } from "../src";

describe("CircleCI Client", () => {
  let client: CircleCI;

  beforeEach(() => {
    client = new CircleCI({
      baseUrl: "test",
      projectSlug: "test",
      token: "test",
      auth: true,
      client: axios,
    });
  });
  test("should instantiate circleci client", () => {
    expect(client).toBeInstanceOf(CircleCI);
    expect(client.config.projectSlug).toEqual("test");
    expect(client.config.token).toEqual("test");
  });
});
