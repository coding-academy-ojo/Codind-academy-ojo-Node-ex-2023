// // const fs = require('fs');

// // // Reading a file
// // fs.readFile('input.txt', (err, data) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log(data.toString());
// // });

// // // Writing to a file
// // const content = 'This is the new content for the output file.';
// // fs.writeFile('output.txt', content, (err) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log('Data written to file successfully!');
// // });

// // // Appending to a file
// // const appendContent = '\nThis is additional content to append to the output file.';
// // fs.appendFile('output.txt', appendContent, (err) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log('Data appended to file successfully!');
// // });



// // // Renaming a file
// // fs.rename('input.txt', 'inputNew.txt', (err) => {
// //     if (err) {
// //       console.error(err);
// //       return;
// //     }
// //     console.log('File renamed successfully!');
// //   });

// // // Checking for errors
// // fs.access('input.txt', (err) => {
// //   if (err) {
// //     console.error(err);
// //     return;
// //   }
// //   console.log('File exists!');
// // });



// const fs = require('fs');

// async function main() {
//   try {
//     // Reading a file
//     const data = await fs.promises.readFile('input.txt');
//     console.log(data.toString());

//     // Writing to a file
//     const content = 'This is the new content for the output file.';
//     await fs.promises.writeFile('output.txt', content);
//     console.log('Data written to file successfully!');

//     // Appending to a file
//     const appendContent = '\nThis is additional content to append to the output file.';
//     await fs.promises.appendFile('output.txt', appendContent);
//     console.log('Data appended to file successfully!');

//     // Renaming a file
//     await fs.promises.rename('input.txt', 'inputNew.txt');
//     console.log('File renamed successfully!');

//     // Checking for errors
//     await fs.promises.access('input.txt');
//     console.log('File exists!');
//   } catch (err) {
//     console.error(err);
//   }
// }

// main();