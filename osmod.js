const os = require('os');

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());
// const freeMemory = os.freemem();
// // console.log(freeMemory);
// console.log(`${freeMemory / 1024 / 1024 / 1024} GB`);

// const totalMemory = os.freemem();
// // console.log(totalMemory);
// console.log(`${totalMemory / 1024 / 1024 / 1024} GB`);