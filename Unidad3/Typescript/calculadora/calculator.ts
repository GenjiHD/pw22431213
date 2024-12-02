type operations = 'plus' | 'less' | 'multiply' | 'divide';
type results = number | string;
const calculator = (a:number,b:number,operation: operations):number => {
    if(operation == 'plus'){
        return a+b;
    }
    if(operation == 'less'){
        return a-b;
    }
    if(operation == 'multiply'){
        return a*b;
    }
    if(operation == 'divide'){
        if(b == 0){
            // return "can`t be divided by zero";
            throw new Error("can`t be divide by zero");
        }
        return a/b;
    }
    throw new Error("This operation isn`t allowed");
}
console.log(calculator(2,4,'plus'));
console.log(calculator(2,4,'less'));
console.log(calculator(2,4,'multiply'));
console.log(calculator(2,7,'divide'));
// console.log(calculator(1,0,'plus'));