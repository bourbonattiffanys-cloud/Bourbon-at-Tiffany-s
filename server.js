/* eslint-disable @typescript-eslint/no-require-imports */

const { spawn } = require("node:child_process");
const { join } = require("node:path");

const nextBin = join(__dirname, "node_modules", "next", "dist", "bin", "next");
const child = spawn(process.execPath, [nextBin, "start"], {
  cwd: __dirname,
  env: {
    ...process.env,
    NODE_ENV: "production",
  },
  stdio: "inherit",
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    child.kill(signal);
  });
}

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
