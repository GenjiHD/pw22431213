let numbers: number;
numbers = 101;
console.log(numbers);

let arraynumbers: number[];
arraynumbers = [1,2,3,4,5,6];
let arraystring: string[];
arraystring = ['cadena','string','otra cadena','etc'];
let arrayboolean: boolean[];
arrayboolean = [true, false, true];
function info(a:number, b:string, c:boolean, d?:number):void{
    console.log(a+" "+b+" "+c+(d == undefined ? '-' : d));
}
info(1,'2',false);

enum usertype{
    Administrator,
    Moderator,
    Guest
}
type User = {
    name:string,
    type:usertype,
    age:boolean,
    readonly ipsecret: string
}
type usernetwork = User & { // extendiendo el tipo
    ip: string,
}
function users(user: usernetwork):void{
    console.log("Name: "+user.name+" type: "+user.type+" age: "+user.age+" con la ip: "+user.ip+" "+user.ipsecret);
}
console.log(users({name:'Martin',type:usertype.Guest,age:true,ip:"192.168.10.4", ipsecret:'10.10.10.254'}));

// Tipos que solo existen en TypeScript
let time:number = 76_000_000;
let animal:string = "dinosaur";
let extinct:boolean = true;

// Tipo any
let myVariable;
myVariable = "string";
myVariable = 42;

// Arreglos
let animals:string[] = ['dog', 'cat', 'horse'];
let numbers1:number[] = [1,2,3,4,5];
let attributes:boolean[] = [];
let numbers2:Array<number> = [];

// numbers1.map(x => x.);

// Tuples
let tuple:[number,string] = [1,'string',];
tuple.push(12) // doesn`t show error
let tuple2:[number,string[]] = [1,['string','string2','string3']];

// Enums
const small = 's';
const median = 'm';
const largue = 'l';
const extralargue = 'xl';

// enum size{small = 10,median,largue,extralargue};
enum size{small = 's',median = 'm',largue = 'l',extralargue = 'xl'};
const larguesize = size.largue;
console.log("Size:"+larguesize);

// Ponemos const para ocultar la enum del JS
const enum statepageload{withoutstart, loading, success, error};
// Solamente sale la asignacion del valor explicito en JS
const state = statepageload.success;

// Objetos
const object:{
    readonly id:number, 
    name:string
} = { id: 1, name: '' }

object.name = 'WP';

// ? opcional
const object2:{id:number, name?:string} = {id:1}
object2.name = 'WP';

const object3:{id:number, name:string, size:size} = {id:1, name:'WP', size:size.median};

type person = {
    id:number,
    name:string,
    size:size
}

const object4:person = {id:1, name:'WP', size:size.extralargue};

type address = {
    zip:number,
    street:string,
        country:string
}

type person2 = {
    id:number,
    name:string,
    size:size,
    address:address
}

const object5:person2 = {id:1, name:'WP', size:size.small, address:{zip:1, street:'know it', country:'Mexico'}};

// Tipado de funciones
function func(){}

const fn1 = (y:number):number => {
    let x = 2;
    if(x > 5){
        return y;
    }
    return 4;
}

const fn2: () => number = () => {
    let x = 2;
    if(x > 5){
        return 2;
    }
    return 4;
}

const fn3: (a:number) => string = (age:number) => {
    if(age >= 18){
        return "You can pass";
    }
    return "You can`t pass";
}

// Never se usa cuando necesitemos que la funcion lance un error
function UserError1():never{
    throw new Error('User error');
}

function UserError2():never{
    throw new Error('User error');
}