// Writes the one-line pitch to /output/entry.txt (the file the grader reads).
import { mkdirSync, writeFileSync } from "node:fs";

const sentence = "Tell me your app idea in plain words and I'll have an AI agent build it for you on make.fun — no coding, no setup, just describe it and watch it come to life.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
