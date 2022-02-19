import { ContextService, JobService, PipelineService, WorkflowService } from ".";
import { CircleCIConfig, Config } from "../config/config";

export class CircleCI {
  public readonly pipelines: PipelineService;
  public readonly jobs: JobService;
  public readonly workflows: WorkflowService
  public readonly context: ContextService

  constructor(config: Config) {
    const circleConfig = new CircleCIConfig({
      token: config.token,
      options: config.options,
      client: config?.client,
      baseUrl: config?.baseUrl
    });
    this.pipelines = new PipelineService(circleConfig);
    this.jobs = new JobService(circleConfig);
    this.workflows = new WorkflowService(circleConfig);
    this.context = new ContextService(circleConfig);
  }
}
