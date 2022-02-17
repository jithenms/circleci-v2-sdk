import axios from "axios";
import { CircleCI, GitProviders } from "../src";

describe("CircleCI Client", () => {
  let circleCI: CircleCI;

  beforeEach(() => {
    circleCI = new CircleCI({
      baseUrl: "test",
      options: {
        gitProvider: GitProviders.GITHUB,
        username: "Jithen"
      },
      token: "test",
      client: axios,
    });
  });
  test("should instantiate circleci client", () => {
    expect(circleCI).toBeInstanceOf(CircleCI);
  });
});
