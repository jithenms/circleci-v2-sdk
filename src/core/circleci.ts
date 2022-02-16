import { CircleCIConfig } from "../config/config";
import { Pipelines } from "./pipelines";
import { Jobs } from "./jobs";

export class CircleCI {
  public readonly config: CircleCIConfig;
  public readonly pipelines: Pipelines;
  public readonly jobs: Jobs;

  constructor(config: CircleCIConfig) {
    this.config = config;
    this.pipelines = new Pipelines(config);
    this.jobs = new Jobs(config);
  }
}
