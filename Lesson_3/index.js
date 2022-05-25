const fs = require('fs');
const readline = require('readline')

const ACCESS_LOG = fs.createReadStream('../Lesson_3/access.log', 'utf-8')

console.log('dsfvsvf')

var rl = readline.createInterface({
    input: ACCESS_LOG,
    output: true
}
);
console.log(rl)

rl.on('line', (line) => {

    if (line.includes("89.123.1.41")) {
        fs.createWriteStream('../Lesson_3/89.123.1.41_requests.log').write(line + "\n")
    }

    if (line.includes("34.48.240.111")) {
        fs.createWriteStream('../Lesson_3/34.48.240.111_requests.log').write(line + "\n")
    }


})
