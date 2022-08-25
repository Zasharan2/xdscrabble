export function box(mx, my, bx, by, bw, bh) {
    if (mx > bx && mx < bx + bw && my > by && my < by + bh) {
        return true;
    } else {
        return false;
    }
}

export var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export function GenerateCode() {
    var code = "";
    for (var i = 0; i < 6; i++) {
        code += letters[Math.floor(Math.random() * letters.length)];
    }

    return code;
}

export function StringToBoard(str, dim) {
    if (dim == 3) {
        var l = Math.cbrt(str.length);
        var b = [];
        for (var i = 0; i < l; i++) {
            b.push([]);
            for (var j = 0; j < l; j++) {
                b[i].push([]);
                for (var k = 0; k < l; k++) {
                    b[i][j].push((str[k + (j * l) + (i * l * l)]));
                }
            }
        }
        return b;
    }
}

export function BoardToString(board, dim) {
    if (dim == 3) {
        var s = "";
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board.length; j++) {
                for (var k = 0; k < board.length; k++) {
                    s = s + board[i][j][k];
                }
            }
        }
        return s;
    }
}