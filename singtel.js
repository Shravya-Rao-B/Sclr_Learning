/*
Prevent an error.API is sending .xml in the place of .jpg
What is global collison by defining styles with css
What are some of the React hooks
Explain use effect hook
Difference between useState and useEffect
How to make the useEffect second parameter optional
How does Redux work
How does javascript compile
Diffrence between compiling of front end vs backend javascript.
Can you add a closure to the below function and optimize further 
console.log(sum(4)(5)(6));
Difference between margin and padding
if the box is of width size 100px and border is of 2px, whats the width occupired on screen.
How to avoid it taking extra space
*/

function sum(a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
}

console.log(sum(4)(5)(6));

//Tell me the output of below code
var hero = {
    name: 'John Doe',
    getSecretIdentity: function (){
        return this.name
    }
}
var stoleSecretIdentity = hero.getSecretIdentity; 
console.log(stoleSecretIdentity()); 
console.log(hero.getSecretIdentity());
