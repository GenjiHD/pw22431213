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