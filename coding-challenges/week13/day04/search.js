const fs = require('fs')

function search(filename, keyword) {

    fs.readFile(filename, 'utf-8', function (error, data) { //read data

        let lines = data.split('\n') //split into lines in the form of an array
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            if (line.indexOf(keyword) != -1) console.log(`line: ${i + 1} data: ${line}`)
        }

    })

}

search("text.txt", "Thursday")