let cap = {
    firstName:"Steve",
    sayHi: function() {
        console.log(`${this.firstName} say's Hi`);
    }
}
cap.sayHi();
let newHi = cap.sayHi;
newHi();