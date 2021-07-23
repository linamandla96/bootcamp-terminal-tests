let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function', function(){

    it('should return product that have quantity higher than threshold', function(){
        assert(findItemsOver([{name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}],25),[ {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
    });
    it('should return product that have quantity higher than threshold', function(){
        
        assert(findItemsOver([{name : 'apples', qty : 10},
        {name : 'pears', qty : 40},
        {name : 'bananas', qty :30},
        {name : 'apples', qty : 3}],25),[ {name : 'pears', qty : 40},
        {name : 'bananas', qty : 30}]);
    });
});