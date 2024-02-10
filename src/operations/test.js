const fs = require("fs");

fs.writeFile('log.txt', 'Hello Node', { flag: "a+" }, (err) => {
    if (err) throw err;
    console.log('The file is created if not existing!!');
})