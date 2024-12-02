// document.write("<h1>Hola mundo</h1>");
// console.log("consola desde JS");
// // console.error("a");

// /*comentarios
// multiples lineas*/

// // Variables
// let x;
// console.log(typeof(x));
// let esPW = false;
// console.log(typeof(esPW));

// if(esPW){
//     console.log("Estamos en clase");
// }
// else{
//     console.log("No estamos en clase");
// }
// let number = -2324.33;
// console.log(number)

// let cadena = "una cadena 'comillas'"
// console.log(cadena);
// let cadena2 = 'otra cadena "al reves"';
// console.log(cadena2);
// // Interpolacion de variables
// let cadena3 = `otra cadena
// incluso puedo tener renglones
// y variables ${number}`;
// console.log(cadena3);

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1);
// let user = {name:"Martin", [id1]:21170282};
// console.log(user.name + " " + user[id1]);

// let variablenula = null;
// console.log(variablenula);

// const PI = 3.1416;
// console.log(PI);
// // PI = 1234;

// let array = [];
// console.log(array);
// array = [1, 2, 3];
// console.log(array);
// array.push(4);
// console.log(array);
// array.pop();
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift(10);
// console.log(array);

// let object = {name:"Martin", age: 47};
// console.log(Object.keys(object));
// console.log(Object.values(object));
// console.log(Object.entries(object));

// alert("Alerta en pantalla");
// let age = prompt("Dame la edad", 0);
// console.log(age);

// let variable = "value";
// const CONSTANT = "VALUE";

// function MyFunction(a = 2){ // Valor por defecto
//     return 2 * a;
// }
// console.log(MyFunction(6));
// const ArrowFunction = (a = 10) => {
//     return 2 * a;
// }
// console.log(ArrowFunction(7));

// // Destructuring - Destructurar
// // Objects
// const users = {
//     name: 'Martin',
//     surname: 'Nevarez'
// }
// let { name, surname } = users;
// console.log(name + " " + surname);

// // Other object
// const users2 = {
//     name: 'Martin',
//     surname: 'Nevarez',
//     networks: {
//         socials: {
//             twx: '@myuser',
//             facebook: '@myface'
//         }
//     }
// }

// // const { twx, facebook } = users2.networks.socials;
// // console.log(twx + " " + facebook);
// const { networks:{socials:{twx}} } = users2;
// console.log(twx);

// // Arrays
// const arrayName = ['Juan', 'Ernesto', 'Omar'];
// // let name1 = arrayName[0];
// // let name3 = arrayName[2];
// const [name1, name3] = arrayName;
// console.log(name1 + " "  + name3);

// // Mixing
// // Objects
// const users3 = {
//     address: 'know it',
//     zip:'2938'
// }
// const newObject = {...users, ...users3};
// console.log(newObject);

// // Arrays
// const arraySurname = ['Perez', 'Lopez', 'Gomez'];
// const newArray = [...arrayName, ...arraySurname];
// console.log(newArray);
// const anotherNewArray = arrayName.concat(arraySurname);
// console.log(anotherNewArray);

// // foreach, for, map, reduce <--- Iterate on arrays
// for(let i=0; i<newArray; i++){
//     console.log(newArray[i]);
// }
// newArray.forEach(function(name){
//     console.log(name);
// });
// let numbers = [1, 2, 3, 4,5];
// let sum = 0;
// numbers.forEach(function(number){
//     sum += number;
// });
// console.log(sum);

// // Map
// let prices = [10, 20, 30, 40, 50];
// const conversion = 0.85;
// let newprices = prices.map(function(price){
//     return price * conversion;
// });
// console.log(newprices);

// // Reduce
// let sumPrices = prices.reduce(function(sum, price){
//     return sum + price;
// },0);
// console.log(sumPrices);

// // Classes
// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     speak(){
//         console.log(`Este ${this.name} hace ruido`);
//     }
// }
// class Dog extends Animal{
//     speak(){
//         console.log(`Mi perro ${this.name} ladra`);
//     }
// }
// const perro = new Dog('Hunter');
// perro.speak();

// Clousures
const variableFunction = function(){
    return "Hola!";
}
console.log(variableFunction());

const greeting = "Hola!";
function extern(){
    const person = ' Martin ';
    function intern(){
        const end = 'Nevarez!';
        return greeting+person+end;
    }
    return intern;
}
console.log(extern()());
const clousure = extern();
console.log(clousure);

// Otro ejemplo
const myCounter = (function(){
    let counter = 0;
    function increment(){
        return ++counter;
    }
    function decrement(){
        return --counter;
    }
    function value(){
        return counter;
    }
    return{
        increment,
        decrement,
        value
    }
})(); // <-- ejecutar la funcion principal
console.log(myCounter);
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
console.log(myCounter.value())

// Promises (Promesas)
// Paginas Dinamicas <--- acceso a datos (internos, externos)
// Kb <--- externas, internas ---> Mb o Gb

let data = [
    {
        id: 1,
        subject: 'Web Programming',
        semester: 6
    },
    {
        id: 2,
        subject: 'Object Oriented Programmig',
        semester: 2
    },
    {
        id: 3,
        sbject: 'Data Structure',
        semester: 3
    }
];
// data = [];
// console.log(data);
// funcion que simula obtener datos de un servidor remoto
const getData = () =>  {
    return new Promise((resolve,reject) =>{
        if(data.length === 0){
            reject(new Error("Data is empty"));
        }
        setTimeout(() => {
            resolve(data);
        },1500); // milisegundos    
    })
}
// Funcion async debe esperar aque termine de obtener la informacion
async function processData(){
    try{
        const data = await getData();
        console.log(data);
    }catch(err){
        console.group(err.message);
    }
}
processData();
// console.log(getData());