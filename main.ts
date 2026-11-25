import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The beige wall: 5 stars. It has never once surprised me, and honestly, I respect that.";

// writeEntry() writes the review line to /output/entry.txt as UTF-8 text
// with no trailing newline, so the sealed gate sees exactly one line.
function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

writeEntry();
