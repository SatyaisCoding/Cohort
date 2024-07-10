{/* <html>
        <script>
            function populateDiv() {
                const a  = document.getElementById("firstNumber").value;
                const b=  documnet.getElementById("secondNumber").value;
                const element = documnet.getElementById("finalSum");
                element.innerHTML = parseInt(a)+parseInt(b);
            }
        </script>

        <body>
            <input id ="firstNumber" type ="text" placeholder="FirstNumber"></input>
            <br></br>
            <input id ="secondNumber" type ="text" placeholder="SecondNumber"></input>
            <br></br>
            <button onClick="populateDiv()">Calculate Sum</button>
            <br></br>
            <div id="finalSum"></div>
            
        </body>
</html> */}




// ***** Fetch ***** //

<html>
        <script>
            function populateDiv() {
                const a  = document.getElementById("firstNumber").value;
                const b=  documnet.getElementById("secondNumber").value;
                
                fetch("https://sum-server.100xdev.com/sum?a=" + a +"&b="+b)    // some sort of server that will provide the sum of a and b 
                        .then(function(resposne)){    // this is because , fetch is Promise , it will return promise to resolve promise , we will use .then()
                            console.log(response);                  // --> Output :   Promise<pending>

                            response.text()           // This is also a promise </pending>
                                .then(function(ans){
                                    console.log(ans); // to see the output value from the server response we will have to filter out the ans from the promise 
                                                        // this is because we will use that things 
                                })
                        };
            }
        </script>

        <body>
            <input id ="firstNumber" type ="text" placeholder="FirstNumber"></input>
            <br></br>
            <input id ="secondNumber" type ="text" placeholder="SecondNumber"></input>
            <br></br>
            <button onClick="populateDiv()">Calculate Sum</button>
            <br></br>
            <div id="finalSum"></div>
            
        </body>
</html>

