import { mkdirSync, writeFileSync } from "node:fs";

const line = "fix(auth): users can now log in as each other, which is technically SSO";

// Gate: the entry must be 1–100 characters, not only whitespace.
if (line.length < 1 || line.length > 100 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-100 chars, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(`wrote ${line.length} chars to /output/entry.txt`);
