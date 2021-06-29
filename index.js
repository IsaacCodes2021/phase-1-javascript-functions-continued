// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
//(function(baseNumber){ return baseNumber + 3; })(2); //=> 5
// the (2) is function invocation
//IIFE - instantly invoked function expression
function outer(greeting, msg="It's a fine day to learn") {
    const innerFunction =  function(name, lang="Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`;
    }
    return innerFunction;
  }
outer("Hello")("student", "JavaScript");
//=> "Hello, student! It's a fine day to learn JavaScript"

//closure and functions within arrays
//In the previous example, we could call the "inner" function, the anonymous function, a "closure." It "encloses" the function-level scope of its parent. 
const array = (
    function(thingToAdd) {
      const base = 3;
      return [
        function() { return base + thingToAdd; },
        function() { return base; }
      ];
    }
)(2) //IIFE is used here
array[0](); //=> 5
array[1](); //=> 3

function wrapAdjective(rapper = '*') {

    return function (wrap = "special") {
        return `You are ${rapper}${wrap}${rapper}!`
   }
   
}
