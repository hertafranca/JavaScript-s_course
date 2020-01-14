/* Make list about 09 class at least 5 lines. Using my  own words:
First step: create a html 5 after create a title, a style, body{background, 
    color, font-size} in head, in body create a h1, <p1> <p2 with <strong>,
     <div> and <script>;
DOM is acronym to Document Object Model; it's a set of objects into my  internet
 browser that it'll give access to the components of the website;
 P.S.: The DOM don't work into Node Js. The Dom work when I'm using the JavaScript
 into my internet browser;
 The DOM's tree: root of DOM's tree is window ( object of the DOM);
 Inside of window has three objects (location, document and history);
 Inside of document has html;
 Inside of html has two objects (head and body);
 Inside of head has, according my docment this class, a meta, title and style;
 Inside of body has, according my document this class, a h1, three <p>, <div> and
 <script>;
 Inside of <p2> has, according my document this class, a <strong>;
 Use command: window.document.write() to write inside of the document;
if want that visible in tela use this the command for example:
 window.document.write(window.document.charset) // utf-8n;
 window.document.write(window.navigator.appname) // netscape;
 window.document.write(window.document.url) // 127,0,015500/class09/exercise01.html;
These examples above show that I can access various components directly from
 the DOM within JavaScript;
Selecting elements to navigating DOM'S tree need access one of the methods. 
they are 5 methods:
for marks;
The command is: getElementsByTagName() 
ex: 
var p1 = window.document.getElementsByTagName('p')[0] //
window.document.write('it's written like this: ' + p1.innertext)
var p2 = window.document.getElementsByTagName('p')[1] //
window.document.write('it's written like this: ' + p2.innertext)
p.s.:other way with templa place
 window.document.write( `It's written like this: ${p1.innerText}<br/>`)
        var p2= window.document.getElementsByTagName('p')[1]
        p1.style.color = 'blue'
       // window.document.write("It's written like this: " + p2.innerText)
        window.document.write(`It's written like this:${p2.innerHTML}`)
        to break line use <br/> in the end of the string.
p.s.:
to configure: 
p1.style.color ='blue'
for ID;
The command is: getElementsById()
ex:
 <div  id="msg">Click Here! </div>
 var d= window.document.getElementById('msg')
 d.style.background= 'white'
for name;
The command: getElementsByName()
ex:
<div  name="msg">How are you? </div>
 var d= window.document.getElementsByName('msg')[0]
 d.innerText= 'Do not now!'
for category;
The command: getElementsByClassName()
ex:
 <div  class="msg">Now click here! </div>
var d= window.document.getElementsByClassName('msg')[0]
d.innerText= 'Have you already clicked?'
for selector; 
The command: querySelector() or querySelectotAll()
ex:
 <div  id="msg1">Do you like DOM? </div>
 var d= window.document.querySelector('div#msg1')
 d.style.color= 'yellow'
 */