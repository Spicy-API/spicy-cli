#!/usr/bin/env node

import { isMainModule } from "../runtime/entrypoint.js";
import { runCli } from "./program.js";

export { createCli, runCli } from "./program.js";
export type { CliDependencies } from "./program.js";

if (isMainModule(import.meta.url)) {
  process.exitCode = await runCli();
}
