let assert = require("assert");
let isWeekDay = require("../isWeekDay");

describe('The isWeekDay function', function(){

    it('should return monday to friday if day is a weekday not weekend day', function(){
        assert('true',isWeekDay('Monday'));
    });
    it('should return sunday or saturday if the day is not a weekday', function(){
        
        assert('false', isWeekDay('Sunday'));
    });
});