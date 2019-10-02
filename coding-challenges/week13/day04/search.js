const fs = require('fs')

function search(filename, keyword) {

    let data = fs.readFileSync(filename, 'utf-8') //read data

    let lines = data.split('\n') //split into lines in the form of an array
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line.indexOf(keyword) != -1) console.log(`line: ${i + 1} data: ${line}`)
    }
    return 'not found!'

}

console.log(search("text.txt", "Friday"))