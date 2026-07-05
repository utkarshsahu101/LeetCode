import fs from "fs";
import path from "path";
import readline from "readline";
import { exec } from "child_process";

const ROOT_FOLDER = "Leetcode-Problems";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Get next serial number
function getNextSerial() {
  if (!fs.existsSync(ROOT_FOLDER)) {
    throw new Error(`"${ROOT_FOLDER}" folder not found.`);
  }

  const folders = fs
    .readdirSync(ROOT_FOLDER)
    .filter((folder) =>
      fs.statSync(path.join(ROOT_FOLDER, folder)).isDirectory(),
    );

  const serials = folders
    .map((folder) => {
      const match = folder.match(/^(\d+)\./);
      return match ? parseInt(match[1], 10) : 0;
    })
    .filter((serial) => serial > 0);

  return serials.length ? Math.max(...serials) + 1 : 1;
}

rl.question("Problem (Example: 572. Subtree of Another Tree): ", (input) => {
  const match = input.match(/^(\d+)\.\s*(.+)$/);

  if (!match) {
    console.log("\n❌ Invalid format.");
    console.log("Example: 572. Subtree of Another Tree");
    rl.close();
    return;
  }

  const problemNumber = match[1];
  const problemName = match[2];

  try {
    const nextSerial = getNextSerial();

    const folderName = `${nextSerial}.${problemNumber}. ${problemName}`;
    const folderPath = path.join(ROOT_FOLDER, folderName);

    // Create folder
    fs.mkdirSync(folderPath, { recursive: true });

    // Create README.md
    fs.writeFileSync(
      path.join(folderPath, "README.md"),
      `# ${problemNumber}. ${problemName}\n`,
    );

    // Create Solution.js
    fs.writeFileSync(path.join(folderPath, "Solution.js"), "");

    console.log("\n✅ Problem created successfully!");
    console.log(`📁 ${folderName}`);
    console.log("📄 README.md created");
    console.log("📄 Solution.js created");

    // Open both files in VS Code
    exec(
      `code "${path.join(folderPath, "README.md")}" "${path.join(
        folderPath,
        "Solution.js",
      )}"`,
      (error) => {
        if (error) {
          console.log(
            "⚠️ Couldn't open files automatically. Make sure the 'code' command is installed.",
          );
        }
      },
    );
  } catch (error) {
    console.error("❌", error.message);
  }

  rl.close();
});
