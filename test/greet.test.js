//const greetToTest = require('../greet');
//console.log(greetToTest("Lina"));
let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert('Hello, Andre', greet('Andrew'));
    });
    it('should greet Karen correctly', function(){
    
        assert('Hello, Karen', greet('Karen'));
    });
});