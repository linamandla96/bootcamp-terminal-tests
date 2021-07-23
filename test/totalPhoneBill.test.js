let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function(){

    it('should return  the total phone  bill  for all data provided', function(){
        assert('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });
    it('should return the total phone  bill for 1 sms and 1 call ', function(){
        
        assert('R3.40', totalPhoneBill('call,sms'));
    });
});