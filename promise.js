// const fs = require('fs');

// // function satyaReadFile(cb){
// //     fs.readFile("a.txt", "utf-8", function(err, data){
// //         cb(data);
// //     });
// // }

// // function onData(data){
// //     console.log(data);
// // }

// // satyaReadFile(onData);





// // mu own async function 

// function satyaReadFile(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt","utf-8", function(err, data){
//             resolve(data);
//         });
//     })
// }

// // call function to call

// function onDone(data){
//     console.log(data);
// }

// satyaReadFile().then(onDone);



const p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value !!");
    }, 5000)
});

async function handlePromise(){
    const val = await p;   // JS Engine was waiting for given time (5 sec) the promise to be resolved 
    console.log("Namaste JavaScript");
    console.log(val);
}

handlePromise();



// Execution

//1: Sinc java Script  sync single threaded , hence the execution is start from line by line 
//2: The JS Engine start execution from the new Promise , and in the promise section we have set the timeout function of 5 sec ,
//3: then the JS Engine will wait for the given time (5 sec) the promise to be resolved 
//3: after that it will print "Namaste Javascript" and goes to the val (l.no : )
//4 : At last the JS Engine will goes to the handlePromise() and execute the remaining code 
 



// One Promise resolveing one time


const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value !!");
    }, 5000)
});

async function handlePromise(){
    console.log("Hello World");
    const val = await p;   // JS Engine was waiting for given time (5 sec) the promise to be resolved 
    console.log("Namaste JavaScript");
    console.log(val);
}

handlePromise();


// Execution Process :  
//1: js engine will execute promise first , wait for 5 sec
//2: Hello world will print
//3: at line no. 73 await wait for the Promise P (i.e: 5 sec)
//4: Namaste JavaScript will print
//5: At last Promise rexolved Value is print 

/// Hence printing sequesnce will be (Output) :

// Hello World
// Namaste JavaScript
// Promise Resolved Value !!



// Same Promises resolving twice


const s = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value !!");
    }, 5000)
});

async function handlePromise(){
    console.log("Hello World");
    const val = await s;   // JS Engine was waiting for given time (5 sec) the promise to be resolved 
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await s;  
    console.log("Namaste JavaScript 2");
    console.log(val);
}

handlePromise();



//   Output   :

// Hello World 
// Namaste JavaScript
// Promise Resolved Value !!
// Namaste JavaScript 2
// Promise Resolved Value !!


// First Hello World will be printed immediate and after 5 sec ,
// immediate all of the remaining will me printed....


// Two Promises resolving resolving twice

const x = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value !!");
    }, 10000)
});

const y = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value !!");
    }, 5000)
});

async function handlePromise(){
    console.log("Hello World");
    const val = await x;   // JS Engine was waiting for given time (5 sec) the promise to be resolved 
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await y;  
    console.log("Namaste JavaScript 2");
    console.log(val);
}

handlePromise();



// ******* OutPut *******

// Hello World
// After 5 sec nothing will be printed 
// insted of 5 sec
//  All of printed after 10 sec
// i.e :
// Namaste JavaScript
// Promise Resolved Value !!
// Namaste JavaScript 2
// Promise Resolved Value !!


// Note : the promsie y is resolved in 5 sec , but still they have to wait for the 10 sec unitl x to be resolved 
//         it looks like async function waited for aqll the promises to be resolved
//         but , it is not true at all , if we resverse the order of the time of the Promises /
//         then the senario will be totally changed . 

// Let's Look How 



const m = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value !!");
    }, 5000)
});

const n = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value !!");
    }, 10000)
});

async function handlePromise(){
    console.log("Hello World");

    
    const val = await m;   // JS Engine was waiting for given time (5 sec) the promise to be resolved 
    console.log("Namaste JavaScript");
    console.log(val);

    const val2 = await n;  
    console.log("Namaste JavaScript 2");
    console.log(val);
}

handlePromise();


// ******* OutPut *******
// Hello World  is printed first as always 
// Here's the interseting things comes out that 
// After 5 sec Namaste JavaScript will be printed  , then 
// Promise resolved Value !!
// and again waited for 5 sec 
// Tortally after 10 sec , it will print the remaining things
// Namaste JavaScript 2
// Promise Resolved value !!


// is'nt amazing ....???


//There are 2 async promises which needs to be reosolved at some points of time 
// Asa we call the handlePromise() is comes  in  Call Stack
// and in that handlePromise function athere arfe 2 promises which needs to be resolved 
// so is JS Engine wait for some time to resolve that promise ..???
// No, js engine doesnot wait for anything , this function(handlePromise()) execution will suspend,
// it will not block the main thread // whern it sees a await thing  and it will wait till the promise is resolved
// then it will move ahead , 
//









