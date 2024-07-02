//normal function

function sum(a,b){
    return a + b;
}

//************ arrow function **************
const sum  = (a,b)=>{
    return a + b;
}
const ans  = sun(1,2);
console.log(ans);


// another way of writing arrow function 

app.get("/", (req,res)=>{

})

app.get("/", function(req, res) {
    
})


//************ map ************

// given an array, give me back a new array in which every value is multiplied by 2
// input ---> [1,2,3,4]
// output -->[2,4,6,8]


const input = [1,2,3,4]
const newArray = [];

for(let i =0; i<=input.length;i++){
    newArray.push(i*2);
}

console.log(newArray);

// writing above function with the help of  map 

function tranform(i){
    return i*2;
}

const ans1 = input.map(tranform);

console.log(ans1);

// another way of writing above function is  : -->

const ans2 = input.map(function(i){
    return i * 2;
});

console.log(ans2);



//************ filtering ************

// given an inpur array , give me back all the even value from it



// one way of doing it (without using map)

input = [1,2,3,4,5];

// output = [2,4]

const  newArr = [];

for(let i =0 ;i<input.length;i++){
    if(input%2 ==0 ){
        newArr.push(input[i])
    }
}

console.log(newArr);


// another way of doing it (with th use of Filtering)

function filteringLogic(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
}

const ans4 = arr.filter(filteringLogic);


