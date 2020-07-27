const prompts = require("prompts");

const questions = [
  {
    type: "number",
    name: "size",
    message: "Input maze size (4n-1):",
  },
];

(async () => {
  const response = await prompts(questions);
  if ((response.size + 1) % 4 != 0) {
    console.log(
      "Size must `4n-1`. Where `n` in positive integer\nFor example: 3, 7, 11, etc..."
    );
    return;
  }

  generateMaze(response.size);
  return;
})();

function generateMaze(size) {
  for (i = 1; i <= size; i++) {
    if (i % 2 == 0) {
        console.log(`@${" ".repeat(size-2)}@`);
    } else {
        if ((i + 1) % 4 == 0) {
            console.log(`${"@".repeat(size-2)} @`);
        } else {
            console.log(`@ ${"@".repeat(size-2)}`);
        }
    }
  }
}
