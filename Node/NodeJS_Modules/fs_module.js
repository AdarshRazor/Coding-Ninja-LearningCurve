const fs = require('fs');

// read file content using blocking code

console.log('starting to read')

//readfilesync will block the other IO thread until it reaches the end of the file
const buffer = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(buffer)


// creating and writing a file
fs.writeFileSync("employee.txt", "NameL sadiujasfhiuasf, Age; 40")
 
// append data in the file

fs.appendFileSync("employee.txt", "new line to the file")

 
// delete a file <check the name is changed coz i dont want to delete the file right after I am creating it>
fs.unlinkSync("employee.text")