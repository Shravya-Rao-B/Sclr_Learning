//Transpose matric using extra space
function transposeMatrix(A){
    let R = A.length;
    let C = A[0].length;
    let newMatrx = Array.from(Array(R),() => new Array(C))
    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            console.log('j and i', j, i);
            newMatrx[j][i] = A[i][j]
        }
    }
    return newMatrx;
}

//console.log(transposeMatrix([[1,2,3],[4,5,6],[7,8,9]]));

function checkIfLuckyNumber(A){
    let B = A.sort((a,b) => a - b );
    let ans = 0;
    for(let i=0; i<B.length; i++){
        if(A[i]== i){
            ans++;
        }
    }
    return ans;
}
// console.log(checkIfLuckyNumber([-3,0,2,5]))
// console.log(checkIfLuckyNumber([-1,-5,3,5,-10,4]));
function checkIfLuckyNumberDuplicates(A){
    let B = A.sort((a,b) => a - b );
    let ans = 0;
    let lastIndex = 0;
    for(let i=0; i<B.length; i++){
        console.log('A[i]', A[i]);
        if(A[i] !== A[i-1]){
            console.log('A[i]! == A[i-1]', A[i], i)
            lastIndex = i
        }
        if(A[i] == lastIndex){
            console.log('A[i] == less', A[i], less)
            ans++;
        }
    }
    return ans;
}
// console.log(checkIfLuckyNumberDuplicates([-10,1,1,1,4,4,4,7,10]));

function sumOfEvenIndices(A, S, E){
    let pf = [];
    pf[0] = A[0];
    pf[1] = A[1];
    for(let i=2; i<A.length; i++){
        if(i%2 == 0){
            pf[i] = pf[i-2]+A[i]
        }
        else {
            pf[i] = A[i]
        }
    }
for(let q=0; q<S.length.length; q++){
    console.log()
}
}

// console.log(sumOfEvenIndices([1,2,4]));

function caseConvert(str){
    let ans = '';
    for(let i=0; i<str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            ans = ans + str[i].toLowerCase();
        }
        else {
            ans = ans + str[i].toUpperCase();
        }
    }
    return ans;
}

/*----------------------------------------------------------------*/

console.log('a',a);
var a = 20;
real();
function real(){
    return "I am 1"
}
function real(){
    return "I am 2"
}
function real(){
return "I am 3"
}

/*----------------------------------------------------------------*/
var b = 10;
console.log("line num 94", b);
function fn(){
    var b = 20;
    console.log("line num 97", b);
    b++;
    console.log("line num 99", b);
if(b){
    var b = 30;
    b++;
    console.log("line num 102", b);
}
console.log("line num 105", b);
}
fn();
console.log("line num 107", b);

/*----------------------------------------------------------------*/

var f = 5;
function fn(){
     f = 6;
     console.log(f);
}
fn();
console.log(f);

/*----------------------------------------------------------------*/

function real(){
    console.log("I am real");
}
function real(){
    console.log("No I am real");
}
real();
function real(){
    console.log("You both are wasted");
}
/*----------------------------------------------------------------*/

let q = "This only works if and only if";
let r = q.slice(q.indexOf("only"));
let s = r.lastIndexOf("only");
r[s]= "i";
console.log(q);
console.log(r);

const x = 2;
let y = 4;
function update(arg){
    return Math.random() + y * arg; } 
    y = 2; 
    y++;
    const result = update(x);
console.log('resule',result);