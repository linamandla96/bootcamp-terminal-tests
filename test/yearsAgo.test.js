let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function(){

    it('should return how many years ago that year is from the current year' , function(){
        assert('2',yearsAgo('2019'));
    });
    it('should return how many years ago that year is from the current year', function(){
        
        assert('29', yearsAgo('1992'));
    });
});