// ******* Callback *************
//--> When a function call another function inside present inside it , then it is called callback

// There are two problem comes inside the call back 

//1: Callback Hell
//2: Inversion of Control




// ************  Callback Hell  **************/

const cart = ['shoes', 'pants', 'kurta'];

api.createOrder(cart, function (){
        api.proceedTOPayment(function(){
                api.showOrderSummary(
                        function(){
                                api.updateWallet()
                        }
                )
        })
})



// Here's the function is defined inside the function and another function is defined onto the anotrher function 
// Due to which the TC will be quite high , hence this is known as the Callback Hell where one function is calling another and so on...



// ****************** Inversion of Control ******************** //


api.createOrder(cart, function (){
        api.proceedTOPayment(function(){

        })


})



// we gave that callback function (proceedToPayment()) to createOrder() function , 
// Now we are expecting that createrOrder function create order and call another function at some point of time .
// This is Very Risky ..
// ProceedToPayment is our very important part of code and we ghave the control of our program to createOrder function 
// Now its createOrder's responsibility to call our function back and we are blindly trusting to createOder function , if createOrder function show any propblem , then all code will be failed 
// Which is quite dangerous thing for our code ....