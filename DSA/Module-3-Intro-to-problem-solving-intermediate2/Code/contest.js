function firstRepeatingLetter(A){
    let B = A.split("");
    let n = B.length;
    let hashMap = new Map();
    for(let i=0; i<n ;i++){
        if(hashMap.has(B[i])){
            return B[i]
        }
        else {
            hashMap.set(B[i], 1)
        }
    }
    return ""
}
// console.log(firstRepeatingLetter("abiiaaa"));

//ans: i

function checkIfStringCanBePalindrome(A){
    let S = A.split("");
    let hashMap = new Map();
    let odd = 0;

    for(let i=0; i<S.length; i++){
        if(hashMap.has(S[i])){
            hashMap.set(S[i], hashMap.get(S[i]) + 1);
        }
        else {
            hashMap.set(S[i], 1);
        }
    }
    for(let [key, val] of hashMap.entries()){
        if(val % 2 == 1){
            odd++;
        }
    }
    if(odd > 1){
        return -1
    }
    for(let i=0; i<S.length; S++){

    }
}
// console.log(checkIfStringCanBePalindrome("abc"));

