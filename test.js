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

console.log(sumOfEvenIndices([1,2,4]));
