

// injecting a html element , changing its style and also capturing an event
function InjectElement() {
    var htmltemplate = `<h1>This is after invoking js!!</h1>`;
    var htmlElement = document.getElementById("testjs");
    htmlElement.innerHTML = htmltemplate;
    htmlElement.style.backgroundColor = 'yellow';
    // htmlElement.innerText = "inner text changed!!";

    var newElement = document.createElement('BUTTON');
    newElement.innerHTML = "to revert the action";
    newElement.id = 'newbutton';
    document.body.appendChild(newElement);

    newElement = document.createElement('input');
    // newElement.setAttributeNS('type','text');
    document.getElementById("testjs").appendChild(newElement);
    
    document.getElementById("newbutton").addEventListener("click",function revertElement(event) {
        event.currentTarget.innerHTML = "button click event captured!";
        console.log("inside event listener");
    }
    );
}

// closures eg 
function outerFunction(a,b) {
    console.log(a*b);
    var innerfunction = function (c) {
        console.log("c is "+ c);
        c = a+b;
        console.log("c using a and b is "+ c);
        return c;


    };
    return innerfunction;
    
};

var callOuter = outerFunction(2,4);

console.log(callOuter(5));



function outerFunction1(a,b) {
    console.log(a*b);
    var innerfunction1 = function (c) {
        console.log("c is "+ c);
        c = a+b;
        console.log("c using a and b is "+ c);
        return c;


    };
     console.log(innerfunction1());
    
};

console.log(outerFunction1(5,6));






function nXfunctionFactory(a) {
    return function nXfunction(b) {
        return a*b;
    }
    
};

var twicefunction = nXfunctionFactory(2);
var thricefunction = nXfunctionFactory(3);

console.log(twicefunction(5));
console.log(thricefunction(5));


var emulateprivatevariabe = (function () {
    var private = 5;
    return {
        value : function () {
        return private;
        }
    };
})();


console.log(emulateprivatevariabe.value());


// A callback is a function passed as an argument to another function.

function callbackeg (callback) {
    
    console.log("this is a callback");
    callback();
}





var firstcall = function () {
    console.log("first function called through callback function");
};


window.setTimeout(firstcall,2000);


// promise : used to handle asynchronous operations in js
//promise constructor takes a callback function with two arguments, resolve and reject 

var promise = new Promise(function(resolve,reject){
    //some function , usually a async function is defined within promise
    //based upon success or failure of above function return resolve or reject
    console.log("inside promise constructor function!!!");
    //resolve("passed from promise resolve");
    reject();
});

//using anonymous function declaration syntax (arrow functions introduced in es6)
promise.then((p) => {
    console.log("promise passed!!!"+p);
}).catch(() => {
    console.log("promise failed!!");
});

//The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs.
// The behavior of async/await is similar to combining generators and promises.
//Async functions always return a promise. 
//If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.

var loadContent = function () {
    return new Promise(resolve => {
        window.setTimeout(()=>{
            resolve("test message!!") 
        console.log("this is the actual logic within your promise method");
        },2000);
    })
        
    };

async function invokeMethod(){
    var output = await loadContent();
    console.log(output);
}

invokeMethod();

//checkin , app idea, react buy and study

//short way to define function
const samplenumber = number => number * 2;
console.log(samplenumber);

//function constructor and prototypes eg , (classes and inheritence)

class Animal{
    constructor(name){
        this.Name = name;
    };
    sound(soundType){
        return this.Name + soundType;
    };
    
}

class Pets extends Animal{
    constructor(name,subtype){
        super(name);
        this.Subtype = subtype;
    }


}

let dog = new Pets('dog','husky');
console.log(dog.Name);
console.log(dog.Subtype);
console.log(dog.sound('bark'));

//string functions and array functions eg, with for loops and if else
//spread and rest operators usage
//map filter reduce

let arrSample = ['a','b','c','d'];
arrSample.push('e');//adds a element in the end
arrSample.pop();//removes last element
arrSample.shift();//removes first element
arrSample.unshift('a');//adds a element in the start
console.log(arrSample);

arrSample.splice(2,2,'f');//add at 2 pos, remove 2, then add 'f'
console.log(arrSample);

let arr2 = [...arrSample,'g','h'];//spread operator
let arr3 = arr2.slice(1,3);
console.log(arr2);
console.log(arr3);

console.log(arr3.reverse());
console.log(arr3.sort());

let arr4 =[1,2,5,4];
console.log(arr4.sort(function(a,b){return a-b}));

arr4 = arr4.map((item)=>{return item*2});//creates new array , performaing a function on each element (kind of select in linq)
console.log(arr4);

arr4 = arr4.filter((item)=>{return item>3});//creates new array , performaing a function on each element (kind of where in linq)
console.log(arr4);

arr4 = arr4.reduce((total,item)=>{return total+item});//creates new array , performaing a function on each element (kind of aggregation in linq)
console.log(arr4);
let arr5 = [22,35,4,25];
let result = arr5.every((item)=>{return item > 20});
console.log(result);
result = arr5.some((item)=>{return item > 25});
console.log(result);


//html css projects atleast 5 basic projects







