module.exports = function (list, list2) {

    var threshhold = [];
    for (const object of list) {

        if (object.qty > list2) {
            threshhold.push(object);
        }

    }

    return threshhold;

}