// Sure, here are some additional requirements for the exercise:

// 1. The script should check whether the "input.txt" file exists before attempting to read it. If the file does not exist, the script should log an error message to the console and exit.

// 2. The script should check whether the "output.txt" file already exists. If the file does exist, the script should prompt the user to confirm whether they want to overwrite the file. If the user confirms, the script should proceed with writing the new file as described in the original requirements. If the user does not confirm, the script should log a message to the console indicating that the operation was cancelled and exit.

// 3. The script should use the `readline` module to prompt the user for confirmation in case the "output.txt" file already exists. The prompt should be in the form of a yes/no question, and the user's response should be interpreted as either confirming or cancelling the operation.
// 4. update the "output.txt" file then delete the "input.txt" file

// Here's an updated starter code that includes these additional requirements:


const fs = require('fs');
const readline = require('readline');

fs.access('input.txt', (err) => {
  if (err) {
    console.error('Input file does not exist!');
    return;
  }

  fs.access('output.txt', (err) => {
    if (!err) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question('Output file already exists. Are you sure you want to overwrite it? (y/n) ', (answer) => {
        if (answer.toLowerCase() !== 'y') {
          console.log('Operation cancelled.');
          rl.close();
          return;
        }
        rl.close();
        writeOutputFile();
      });
    } else {
      writeOutputFile();
    }
  });
});

function writeOutputFile() {
  fs.readFile('input.txt', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const convertedText = data.toString().toUpperCase();
    const separator = '\n----------------------------------------\n';
    const outputText = `${convertedText}${separator}${data.toString()}`;

    fs.writeFile('output.txt', outputText, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File conversion successful!');
    });
  });
}

