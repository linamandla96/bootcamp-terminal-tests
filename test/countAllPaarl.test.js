let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function(){

    it('should return all registration numbers from paarl', function(){
        assert(countAllPaarl("CJ 678 543"),"CJ 678 543");
    });
    it('should return all registration numbers from Town', function(){
        
        assert(countAllPaarl("CJ 678 543","CJ67890"),"CJ 678 543","CJ67890");
    });
});