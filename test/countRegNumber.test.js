let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function(){

    it('should return number of three registration numbers in the string', function(){
        assert('3', countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    it('should return number of two registration numbers in the string', function(){
        
        assert('2', countRegNumber('CA 182736,CY 523519'));
    });
});