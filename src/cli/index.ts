#!/usr/bin/env node

import { isMainModule } from "../runtime/entrypoint.js";
import { relaunchWithEnvProxy, shouldRelaunchWithEnvProxy } from "../runtime/env-proxy.js";
import { runCli } from "./program.js";

export { createCli, runCli } from "./program.js";
export type { CliDependencies } from "./program.js";

if (isMainModule(import.meta.url)) {
  // Honor HTTPS_PROXY the way curl in the same shell does; Node.js fetch alone would not.
  if (shouldRelaunchWithEnvProxy()) await relaunchWithEnvProxy();
  process.exitCode = await runCli();
}
