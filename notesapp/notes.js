const fs = require("fs");

fs.writeFileSync('notes.txt', 'my notes...');
console.log('notes.txt created!');

getNotes = function () {
    return 'Your notes...'
}

module.exports = getNotes;




// command = process.argv[2];

// if (command === 'add') {
//     console.log('Add Note!');
// } else if (command === 'remove') {
//     console.log('Remove Note!');
// }


// const myNotes = getNotes();

// console.log(myNotes);
// console.log(process.argv);
// console.log(yargs.argv);
// console.log(validator.isEmail('foo@bar.com'));
// console.log(chalk.green.inverse('Success!'));
// console.log(chalk.red.inverse('red!'));
