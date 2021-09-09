

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

//using anonymous function declaration syntax
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






