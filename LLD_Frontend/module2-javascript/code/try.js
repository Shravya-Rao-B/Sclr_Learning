function Rabbit(name){
    this.name = name;
};
Rabbit.prototype.sayHi = function (){
    console.log(`Hi from ${this.name}`);
}
let rabbit = new Rabbit('Rabbit');
rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
// rabbit._proto_.sayHi();