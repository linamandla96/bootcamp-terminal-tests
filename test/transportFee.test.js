let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function', function(){

    it('should ruturn  R20 for morning shift', function(){
        assert('20', transportFee('morning'));
    });
    it('should ruturn R10 for afternoon shift', function(){
        
        assert('10', transportFee('afternoon'));
    });
});