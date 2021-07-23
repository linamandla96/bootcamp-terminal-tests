let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20 function', function(){

    it('should return product that have quantity higher than 20' , function(){
        assert(findItemsOver20([{name : 'apples', qty : 50},
        {name : 'pears', qty : 15},
        {name : 'bananas', qty : 21},
        {name : 'apples', qty : 3}]),[{name : 'apples', qty : 50},
        {name : 'bananas', qty : 21}]);
    });
    it('should return product that have quantity higher than 25' , function(){
        
        assert(findItemsOver20([{name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}]),[{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]);
    });
});