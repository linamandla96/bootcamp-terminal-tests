module.exports = function (regNum, loc) {
    var countArr = regNum.split(',')

    var countNumArr = [];
    for (var i = 0; i < countArr.length; i++) {
        if (countArr[i].trim().startsWith(loc)) {
            countNumArr.push(countArr[i].trim());

        }
    }
    return countNumArr.length;
}
