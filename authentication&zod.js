const express = require("express");
const app = express();

function kidneyMiddleware(req, res,next){
    if(kidneyId != 1 && kidneyId != 2){  // this is the traditional(ugly) way of writing validation 
        res.status(403).json({
            msg:"Incorrect Inputs",
        });
    }else{
        next();
    }
};
app.get("/health-check", userMiddleware, kidneyMiddleware, function(req,res){
    //do something with the kidney

    res.send("Your Kidney is Healthy");
});
app.listen(3000);

// we can definitely write better than above validation with the help of "ZOD"

const express = require("express");
const { validateHeaderName } = require("http");
const z = require("zod");

app.use(express.json);

const schema = zod.array(zod.number());

app.use(express.json);

app.post("/health-check", function(req,res){
    // kidney = [1,2]

    const kidneys = req.body.kidneys;
    const validation = schema.safeParse(kidneys);

    if(!validation.success){
        res.send(411).json({
            msg : "Incorrect Input"
        })
        return;
    }
    res.send(response);
});

app.listen(3000);

// Write a zod validation for the function having
// email -> String
// password  => atleast 8 letter
// country -> "IN" or "US"


const schema1 = zod.object({
    email : z.string(),
    password :z.string(),
    country : z.literal("US").or(z.literal("US")) 
})

const zod = require("zod");
function validInput(arr){
    const schema = zod.array(zod.number())
    const response = schema.safeParse(arr);
    console.log(response);
}
validInput([1,2,3])
