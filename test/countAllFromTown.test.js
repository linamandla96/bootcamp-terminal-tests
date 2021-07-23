let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function(){

    it('should return all registration number in the string that is for stellie', function(){
        assert(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),'3');
    });
    it('should return  one if there is one registration number for stellie', function(){
        
        assert(countAllFromTown('CY 567,CL 124','CL'),'1');
    });
});