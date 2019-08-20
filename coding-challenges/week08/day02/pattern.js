// definition
function pattern(n) {
    var line = ''

    for (var row = n; row >= 1; row--) {

    for (var column = 1; column <= n; column++) {
        if (column <= row -1)
           line = line + ' '
        else
           line = line + '* '
    }
    line = line + '\n'
    }
    return line
    }
    console.log(pattern(7))