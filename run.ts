import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// Handle ESM __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get filename from CLI
const [, , fileArg] = process.argv;

if (!fileArg) {
  console.error("❌ Please provide a filename. Usage: npm start -- <filename>");
  process.exit(1);
}

// Path to script inside scripts/
const targetFile = path.join(__dirname, "scripts", fileArg);

// Run with ts-node in ESM mode
exec(
  `node --import ./register-loader.js ${targetFile}`,
  (err, stdout, stderr) => {
    if (err) {
      console.error(`❌ Error:\n${stderr}`);
      return;
    }
    console.log(stdout);
  }
);
