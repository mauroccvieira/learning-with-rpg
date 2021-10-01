import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const readInput = (question: string) => {
  return new Promise((resolve) => {
    rl.question(question, (pos) => {
      resolve(pos);
    });
  });
};
