Promise.myPromiseAll = function (arrOfPromises) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(arrOfPromises)) {
            reject("Expected a array of Promise.")
            return;
        }

        let unresolvedPromise = arrOfPromises.length;
        const resolvedPromiseRes = [];

        if (unresolvedPromise === 0) {
            resolve(resolvedPromiseRes);
        }

        arrOfPromises.forEach(async (promise) => {
            try {
                const value = await promise;
                resolvedPromiseRes.push(value);

                unresolvedPromise--;
                if (unresolvedPromise === 0) {
                    resolve(resolvedPromiseRes);
                }
            } catch (err) {
                reject(err);
            }
        });
    });
}


//  when all the promises are resolved
// Test Case 1
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
});

Promise.myPromiseAll([p0, p1, p2]).then(console.log, (err) => { console.log("promise got rejected with error: " + err) })

// Real.
Promise.all([p0, p1, p2]).then(console.log, (err) => { console.log("promise got rejected with error: " + err) })

//  when all the promises are rejected
// Test Case 2
const p0_1 = Promise.resolve(3);
const p1_1 = 42;
const p2_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('foo');
    }, 1000);
});

// Our Method.
Promise.myPromiseAll([p0_1, p1_1, p2_1]).then(console.log, (err) => { console.log("promise got rejected with error: " + err) })


// Real
Promise.all([p0_1, p1_1, p2_1]).then(console.log, (err) => { console.log("promise got rejected with error: " + err) })