// register-loader.js
import { register } from "node:module";
import { pathToFileURL } from "node:url";

// Use ts-node's ESM transpile loader
register("ts-node/esm/transpile-only", pathToFileURL("./"));
