// const express = require("express");

// const app = express();

// app.get("/health-check", function(req, res){
//     //dp health check-up here

//     const kidneyId = req.query.kidnyeId;
//     const username = req.header.username;
//     const password = req.headers.password;
    
//     if(username!='satya' && password != 'password'){
//         res.status(400).json({
//             msg : "user doesn't exist"
//         });
//         return;
//     }

//     if(kidneyId != 1 && kidneyId !=2){
//         res.status(400).json({
//             msg:"Wrogn inputs"
//         });
//         return;
//     }

//     // do something with kidney here
    
//     res.send("Your Heart is Healthy");
// })

// app.listen(3000);


// Above code is without middleware , there are several changes u can do in order to make it optimize 
// But the main thing that u can do is the  use of "MiddleWare"


// Middleware :  Middleware functions are functions that have access to the request object (req), the response object (res), 
//and the next middleware function in the application’s request-response cycle.
// The next middleware function is commonly denoted by a variable named next.

// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.


// Optimising the above code by using the MiddleWare 



const express = require("express");
const { escape } = require("querystring");
const app = express();

function userMiddleware(req, res,next){
    if(username!= "satya" && pass != "pass"){
        res.status(403).json({
            msg:"Incorrect Inputs",
        });
    }else{
        next();   // This next is making the request to the next function
                    // for example here firstly usermiddleware is completed and after that the next is helping to the function directed to the next function i.e  kidneyMiddleware
                // whatever this next() is doing all is doing with the help of the Express  
    }
};

function kidneyMiddleware(req, res,next){
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg:"Incorrect Inputs",
        });
    }else{
        next();
    }
};
// app.use(userMiddleware)  any request is after this use middleware is used in every request

app.get("/health-check", userMiddleware, kidneyMiddleware, function(req,res){
    //do something with the kidney

    res.send("Your Kidney is Healthy");
});
app.get("/health-check", userMiddleware, kidneyMiddleware, function(req,res){
    //do something with the kidney

    res.send("Your Kidney is Healthy");
});
app.get("/health-check", userMiddleware,  function(req,res){   // -> heart validation , that's why kidneyId validation is not nesseary
    //do something with the kidney

    res.send("Your Heart is Healthy");
});


// if u want to use post body parameter -> you can use app.use()  --> THIS means that this middleware is called everyware


//  ************* Assignment ***********

// 1 -> Count the number of request .
// 2-> Find the avearge time your server is taking to handle the request