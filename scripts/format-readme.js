import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ROOT_FOLDER = "Leetcode-Problems";

// Get the latest problem folder (highest serial number)
function getLatestProblemFolder() {
  if (!fs.existsSync(ROOT_FOLDER)) {
    throw new Error(`"${ROOT_FOLDER}" folder not found.`);
  }

  const folders = fs
    .readdirSync(ROOT_FOLDER)
    .filter((folder) =>
      fs.statSync(path.join(ROOT_FOLDER, folder)).isDirectory(),
    );

  if (folders.length === 0) {
    throw new Error("No LeetCode problem folders found.");
  }

  folders.sort((a, b) => {
    const serialA = parseInt(a.split(".")[0], 10);
    const serialB = parseInt(b.split(".")[0], 10);
    return serialB - serialA;
  });

  return folders[0];
}

async function main() {
  try {
    const latestFolder = getLatestProblemFolder();

    const readmePath = path.join(ROOT_FOLDER, latestFolder, "README.md");

    const content = fs.readFileSync(readmePath, "utf8");

    console.log(`Formatting: ${latestFolder}`);

    const response = await client.responses.create({
      model: "gpt-5.5",
      input: [
        {
          role: "system",
          content: `
You are an expert Markdown formatter.

Convert the given LeetCode problem statement into clean GitHub Flavored Markdown.

Rules:
- Preserve every piece of information.
- Do NOT summarize.
- Keep the title.
- Use ## headings.
- Format examples properly.
- Convert constraints into bullet lists.
- Wrap code in fenced code blocks.
- Use inline code where appropriate.
- Return ONLY markdown.
          `,
        },
        {
          role: "user",
          content,
        },
      ],
    });

    const markdown = response.output_text;

    fs.writeFileSync(readmePath, markdown);

    console.log("✅ README formatted successfully!");
  } catch (error) {
    console.error("\n❌ Error:");
    console.error(error);
  }
}

main();
