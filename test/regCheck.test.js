let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function(){

    it('should return true if registration number is for GP', function(){
        assert('true', regCheck('DV 23 NB GP', 'GP'));
    });
    it('should return false if registration number is not for GP', function(){
        
        assert('false', regCheck('DV 23 LP GP', 'MP'));
    });
});