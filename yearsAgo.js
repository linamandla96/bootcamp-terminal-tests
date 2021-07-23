module.exports = function (year) {
    var theDate = new Date();


    let diff = theDate.getFullYear() - year;

    return diff;


}