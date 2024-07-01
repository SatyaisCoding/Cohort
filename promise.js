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





// // my own async function 

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




// Promises are used to handle async function in the JavaScript


 // According to the MDN reference 
 //The Promise object represents the eventual completion (or failure)
 // of an asynchronous operation and its resulting value.


 // Promise Chaining :

 
 const cart = ["shoes","pants","kurta"]

 createOrder(cart, function(orderId){
    procedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance();
        });
    });
 });
 

 createOrder(cart)
    .then(function(orderId){
       return procedToPayment(orderId);
    })
    .then(function(paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then(function(paymentInfo){
       return updateWalletBalance(paymentInfo)
    });



// Whenever we are attachiong lots of .then() & lot of Callbacks() then what happes is that , we want to pipe the data (means that we are trying to execute callbacks one by one in a series like pipelines )
// we want to the data will flow in the chain for that we have to take care that we have return something , then we will get our data properly in our chain.
// Promise Chainig is a method to handle promise and It also helps us to get back from CallBack Hell.
