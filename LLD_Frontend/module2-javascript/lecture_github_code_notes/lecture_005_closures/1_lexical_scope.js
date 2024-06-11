/**
 * outer scope  : every function has access to it's vars/lets
 * as well as as any variable deaclred outside 
 * */

// var x = 10;
// function fn() {
//     /** you are taking the value from the current/local scope */
//     // var x = 20;
//     console.log("c Value of x is ", x);
// }

// fn();


// var varName = 10;
// /**fn def*/
// function b() {
//     console.log("in b", varName);
// }

// function fn() {
//     var varName = 20;
//     /**fn call*/
//     b();
//     console.log("in fn: ", varName);  //20
// }

// fn();


let varName = "I'm here";
function fn(){
    let varName = 10;
    function inner(){
        console.log(varName);
    }

    inner();
}

fn();


/**
 * b -> varName -> outer scope  -> fn defintion
 * 
 * JS says that outer scope is lexically scoped -> your fn definiton
 * */ 