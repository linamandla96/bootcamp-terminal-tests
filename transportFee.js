module.exports = function (price) {

    if (price.startsWith('mo')) {
        return 'R20';
    }
    else if (price.startsWith('after')) {
        return 'R10';
    }
    else {
        return 'free';
    }
}