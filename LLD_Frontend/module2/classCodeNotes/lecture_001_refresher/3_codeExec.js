// 1st statement: 

// high level view -> how your code exec
// stack -> callstack
// let a = 10;
// function fn() {
//     console.log("I am fn");
//     function inner() {
//         console.log("I am inner");
//     }
//     inner();
// }
// fn()


// Code Excution : always exec in EC
    // GLobal code -> GEC
    // insidee fn -> own EC

// code execution
        // 1.  EC creation
                // 1.a Hoisting -> memory allocation
                                // variable -> undefined;
                                // fn -> get it's memory allocated
                // 2. global -> browser -> window/nodejs-> global-> features
                // 3. outer scope-> outer var
                // 4. this-> always calculated
        //  2. EC Code execution


// console.log("a",a);
// var a=10;
// // this can cause a bug
// real();
// function real() { console.log("I am real. Always run me"); }  // these two are deprecated by GEC.
// function real() { console.log("No I am real one "); } // these two are deprecated by GEC.
// function real() { console.log("You both are wasted"); }


// console.log(window);

// js -> logic 
// feature -> environment -> nodejs->node, browser->Window