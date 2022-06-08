const wordSearch = (letters, word) => {
    if (letters === undefined || letters.length < 1) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = [];

    for (let col = 0; col < letters[0].length; col++) {
        let str = '';
        for (let row = 0; row < letters.length; row++) {

            //for backwards
            // for (let row = letters.length; row >= 0; row--) {

            // arr[0][0] - arr[1][1] - arr[2][2]...
            // arr[1][0] - arr[2][1] - arr[3][2]... 

            str += letters[row][col];
        }
        verticalJoin.push(str);
    }

    if (wordChecker(horizontalJoin, word) || wordChecker(verticalJoin, word)) {
        return true;
    };

    return false
}

const wordChecker = function (array, word) {
    for (const string of array) {
        if (string.includes(word)) return true;
    }
}

module.exports = wordSearch