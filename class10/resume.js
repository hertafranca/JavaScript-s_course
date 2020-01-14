/* Make list about 10 class with at least 5 lines. Using my own words!
This class about Dom's event;
Dom's event is all that can happend inside div;
In css was made basic settings as : 
font - background color - color -width - height - line height - text align;
Was created a div: div Id = 'area' > Interact
Command to mouse wthin div:
mouseenter:
when move the mouse to arrive inside div.
mousemove:
when move the mouse that already is inside div.
mousedown:
when click and holding the mouse inside div.
mouseup:
when drop the mouse that was holding inside div..
click:
when only quickly press and drop the mouse inside div.
ex:
<body>
    <div id = "area" onclick="clicar()">
        Interact with my web page!
    </div>

    <script>
    function clicar() {
        var area= window.document.getElementById('area')
        area.innerText = 'Cliked!'
}
    </script>
</body>
</html>
mouseout:
when remove the mouse from inside div.
p.s.: to search more DOM's event use site : Event reference MDN.
What's function in JavaScript? It's set of the codes or lines that can only be 
fired when the event occcurs.
Command to fired the codes when the event occurs:
function action(paramenter){ block};
ex:
<body>
    <div id = "area" onclick="clicar()" onmouseenter = "comeIn()"  onmouseout = "exit()" >
        Interact with my web page!
    </div>

    <script>
     var area= window.document.getElementById('area')    
    function clicar() {
        area.innerText = 'Cliked!'
        area.style.backgroundColor ='red'
}
    function comeIn() {
        area.innerText = 'Came In!'
}
    function exit() {
        area.innerText = 'Exited!'
    }
    </script>
</body>
</html>
Other way can be made inside JavaScript using the command :
var.addEventListener('action', function);
ex: 
<body>
    <div id = "area" >
        Interact with my web page!
    </div>

    <script>
     var area= window.document.getElementById('area')   
      area.addEventListener('click', clicar)
      area.addEventListener('mouseenter', comeIn)
      area.addEventListener('mouseout', exit)
      
    function clicar() {
        area.innerText = 'Cliked!'
        area.style.backgroundColor ='red'
}
    function comeIn() {
        area.innerText = 'Came In!'
}
    function exit() {
        area.innerText = 'Exited!'
    }
    </script>
</body>
</html>
p.s: to detect mistakes use command: to click right button in inspect, above 
it'll show a red little ball saying where is the mistake.
Let's Practice DOM'S Event in the exercise 2:
ex:
<body>
    <h1>ADDING THE VALUES!</h1>
    <input type="number" name="txtn1" id="txtn1"> +
    <input type="number" name="txtn2" id="txtn2">
    <input type= "button" value="flux" onclick="flux()">
    <div id = "res" >Result</div>
    <script>
        function flux() {
            var tn1 = window.document.getElementById('txtn1')
            var tn2 = window.document.querySelector('input#txtn2')
            var res = window.document.getElementById('res')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var add= n1 + n2
        res.innerHTML = `The flux between ${n1} and ${n2} is equal the <strong> ${add} </strong>`
        }
    </script>

</body>
</html>
*/