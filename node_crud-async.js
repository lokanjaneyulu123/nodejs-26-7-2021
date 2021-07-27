// CRUD async

const fs = require('fs');

// fs.mkdir("lok" , (err) => {
//     console.log("folder created");
// });

// fs.writeFile("./lok/bio.txt" , "my name is lok", 
// (err) => {
//     console.log("files created");
//  });

// fs.appendFile("./lok/bio.txt", " hello", (err) => {
//     console.log("files append");
// });

// fs.readFile("./lok/bio.txt", "utf8", (err,data) => {
//     console.log(data);
// });

// fs.readFile("./lok/bio.txt", "utf8", (err,data) => {
//     console.log(err);
// });

// fs.rename("./lok/bio.txt", "./lok/mybio.txt", (err) => {
//     console.log("renmae done");
// });

// fs.unlink("./lok/mybio.txt", (err) => {
//     console.log("file deleted");
// });

fs.rmdir("./lok", err => {
    console.log("folder deleted");
});