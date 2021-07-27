const fs = require('fs');

// fs.writeFile('read.txt' , 'today is awesome day:) ' ,
//  (err) => {
//     console.log("file created");
//     console.log(err);
// });

// fs.appendFile('read.txt', 'good morning, today is awesome day',
// (err) => { 
//     console.log("task completed");

// });

fs.readFile('read.txt', "UTF-8" , (err, data) =>{
    console.log(data);
});
