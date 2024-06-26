let promise = Promise.resolve(10);

// promise.then(function(data){
//     console.log(data);
// }).then(function(firstThenVal){
//     console.log("line 6",firstThenVal);
// }).then(function(secondThenVal){
//     console.log("line 8",secondThenVal);
// });

const promise1 = Promise.resolve(100);
const promise2 = Promise.resolve(200);
const promise3 = Promise.reject(300);
const promise4 = Promise.reject(400);

let promiseAll = async () => {
    console.log("1");
    const group1 = await Promise.all([promise1, promise2]);
    console.log("2", group1);
    const group2 = await Promise.all([promise3, promise4])
    console.log("3", group2);
    return [group1, group2]
}
promiseAll().then((data) => {
    console.log("prmise.all result", data);
}).catch(err => console.log('err promise all',err));

let promiseAny = async() => {
    console.log("5");
    const group1 = await Promise.any([promise1, promise2]);
    console.log("6", group1);
    const group2 = await Promise.any([promise3, promise4])
    console.log("7", group2);
    return [group1, group2]
}
promiseAny().then((data) => {
    console.log("promise.any result", data);
}).catch(err => console.log('err prmoise any',err));

const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 2000, 'one');
})
const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 3000, 'two');
})

Promise.race([firstPromise, secondPromise]).then(res => console.log("race",res));

