import { CircleCIConfig } from "../config/config";
import { Pipelines } from "./pipelines";
import { Jobs } from "./jobs";
import { Workflows } from ".";

export class CircleCI {
  public readonly pipelines: Pipelines;
  public readonly jobs: Jobs;
  public readonly workflows: Workflows

  constructor(config: CircleCIConfig) {
    this.pipelines = new Pipelines(config);
    this.jobs = new Jobs(config);
    this.workflows = new Workflows(config);
  }
}
