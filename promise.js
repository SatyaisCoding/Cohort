const fs = require('fs');

// function satyaReadFile(cb){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         cb(data);
//     });
// }

// function onData(data){
//     console.log(data);
// }

// satyaReadFile(onData);





// mu own async function 

function satyaReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8", function(err, data){
            resolve(data);
        });
    })
}

// call function to call

function onDone(data){
    console.log(data);
}

satyaReadFile().then(onDone);