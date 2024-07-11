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

{/* <html>
        <script>
            function populateDiv() {
                const a  = document.getElementById("firstNumber").value;
                const b=  documnet.getElementById("secondNumber").value;
                
                fetch("https://sum-server.100xdev.com/sum?a=" + a +"&b="+b) ;   // some sort of server that will provide the sum of a and b 
                        .then(function(resposne)){    // this is because , fetch is Promise , it will return promise to resolve promise , we will use .then()
                            console.log(response);                  // --> Output :   Promise<pending>

                            response.text()           // This is also a promise </pending>
                                .then(function(ans){
                                    console.log(ans); // to see the output value from the server response we will have to filter out the ans from the promise 
                                                        // this is because we will use that things 
                                })
                        };
            }

            // *** With the help of Aync await function   // --> this function doest exact same thing that above function does but it is the cleaner way to do it 

            async function populateDiv2(){
                const a  = document.getElementById("firstNumber").value;
                const b=  documnet.getElementById("secondNumber").value;

                const response = await fetch("https://sum-server.100xdev.com/sum?a=" + a +"&b="+b) ; 
                const ans = await response.text();
                document.getElementById("finalSum").innerHTML = ans;
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



//********** Debouncing *********//

 //->  used to enhanced the browser's performance 
 //-> when actions arte triggered to muchh, it can significantly impact browser performance 
 //-> used to reduced unneccessary calls from backend evetually that will enhanced the performance of the brower
 
 // from above code , when we fetch the sum-server api , then backend call will be triggered for single input , for exp : if we press 222 , then for "222" there will be 3 backend calls will be triggered 
 // to prevent the uneccessary call , we use the concepts of "Debouncing"



 <html>
        <script>

            let timeout;
            function debopuncePopulateDiv(){
                // how do you cancel a clock ?
                // clearTimeOut

                clearTimeout(timeout)
                timeout = setTimeout(function(){
                    populateDiv();
                },1000);
            }
            
            function populateDiv() {
                const a  = document.getElementById("firstNumber").value;
                const b=  documnet.getElementById("secondNumber").value;
                
                fetch("https://sum-server.100xdev.com/sum?a=" + a +"&b="+b) ;   // some sort of server that will provide the sum of a and b 
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

