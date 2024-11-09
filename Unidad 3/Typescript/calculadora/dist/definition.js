"use strict";
let numbers;
numbers = 101;
console.log(numbers);
let arraynumbers;
arraynumbers = [1, 2, 3, 4, 5, 6];
let arraystring;
arraystring = ['cadena', 'string', 'otra cadena', 'etc'];
let arrayboolean;
arrayboolean = [true, false, true];
function info(a, b, c, d) {
    console.log(a + " " + b + " " + c + (d == undefined ? '-' : d));
}
info(1, '2', false);
var usertype;
(function (usertype) {
    usertype[usertype["Administrator"] = 0] = "Administrator";
    usertype[usertype["Moderator"] = 1] = "Moderator";
    usertype[usertype["Guest"] = 2] = "Guest";
})(usertype || (usertype = {}));
function users(user) {
    console.log("Name: " + user.name + " type: " + user.type + " age: " + user.age + " con la ip: " + user.ip + " " + user.ipsecret);
}
console.log(users({ name: 'Martin', type: usertype.Guest, age: true, ip: "192.168.10.4", ipsecret: '10.10.10.254' }));
let time = 76000000;
let animal = "dinosaur";
let extinct = true;
let myVariable;
myVariable = "string";
myVariable = 42;
let animals = ['dog', 'cat', 'horse'];
let numbers1 = [1, 2, 3, 4, 5];
let attributes = [];
let numbers2 = [];
let tuple = [1, 'string',];
tuple.push(12);
let tuple2 = [1, ['string', 'string2', 'string3']];
const small = 's';
const median = 'm';
const largue = 'l';
const extralargue = 'xl';
var size;
(function (size) {
    size["small"] = "s";
    size["median"] = "m";
    size["largue"] = "l";
    size["extralargue"] = "xl";
})(size || (size = {}));
;
const larguesize = size.largue;
console.log("Size:" + larguesize);
// AQUI deberia venir la enumeracion de los estados de carga
const state = 2;
