let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function(){

    it('should return Paarl if registration numbers start with CJ', function(){
        assert('Paarl', fromWhere('CJ'));
    });
    it('should return Cape Town if registration nuber start with CA', function(){
        
        assert('Cape Town', fromWhere('CA'));
    });
});