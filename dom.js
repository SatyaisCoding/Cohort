<html>
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
</html>