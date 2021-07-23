let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should return true if registration number starts with CY correctly', function(){
        assert('true', isFromBellville('CY'));
    });
    it('should return false if registration number does not starts with CY', function(){
        
        assert('false', isFromBellville('CL'));
    });
});