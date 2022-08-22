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