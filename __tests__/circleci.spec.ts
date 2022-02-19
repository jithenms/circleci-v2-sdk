import axios from "axios";
import { CircleCI } from "../src";

describe("CircleCI Client", () => {
  let circleCI: CircleCI;

  beforeEach(() => {
    circleCI = new CircleCI({
      baseUrl: "test",
      options: {
        gitProvider: "gh",
        username: "Jithen",
      },
      token: "test",
      client: axios,
    });
  });
  test("should instantiate circleci client", () => {
    expect(circleCI).toBeInstanceOf(CircleCI);
  });
});
