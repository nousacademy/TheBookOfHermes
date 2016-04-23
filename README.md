# The Book Of Hermes

Lightweight Javascript DOM manipulation library



<img src='https://raw.githubusercontent.com/nousacademy/TheBookOfHermes/master/CorpusHermeticum/bookcover.jpg'>



The Hermetic documentation can be veiwed below. Anyone is welcome to fork and extend this library, or if you have any feature requests just submit an issue!



<br>



To add this sacred book to your library simply clone this REPO or you can use Bower (recommended) or NPM (also recommended):

<br>

<br>

 <code>bower install the-book-of-hermes</code>



<br>

<code>npm install the-book-of-hermes</code>

<br>



<b>DOM selector </b>

<br>

<code>

h('#myID'); //gets selector

</code> 

<br> 





<b>For Loop</b>

<br>

<code>

Hermes.ouroboros(myArray, function(cb){

console.log(cb);

});

</code>

<br>



<b>Event listener</b>

<br>

Hermes can listen to any type of Event - "mouseover", "click", "mouseout", "mousemove"

<br>

<code>

h('.selector').listen(eventName, function(e){console.log(e)})

</code>

<br>



<b>GET Call</b>

<br>

<code>

Hermes.theft(url, function(data){

console.log(data);

});

</code>

<br>



<b>POST JSON Data</b>

<br>

<code>

Hermes.give = function(url, data, cb) {  

    console.log(cb)

}

</code>

<br>



<b>Effects</b>

<br>

This will fade your element in, just pass in your element as a paramater.

<br>



<b>Basic DOM manipulation:</b>

<br>

<br>



<b>Hide your element</b>

<br>

<code>

h('.selector').conceal();

</code>

<br>



<b>Show your element</b>

<br>

<code>

h('.selector').reveal();

</code>

<br>



<b>Show & Hide your element</b>

<br>

<code>

h('.selector').switch();

</code>

<br>



<b>Remove element from DOM</b>

<br>

<code>

h('.selector').vanquish();

</code>

<br>



<b>Add multiple child elements to DOM</b>

<br>

<code>



var html = [{

     "node": "div",

     "class": "row-Dyad",

    "text": "I'm a child node"

 }, {

     "node": "div",

    "class": "col-Dyad tetrad-four",

    "text": "I'm a child node of a child node"

 }]



h('.selector').multiply(html);



</code>

<br>



<b>Add a class to your element</b>

<br>

<code>

h('.selector').addClass('class2add');

</code>

<br>



<br>



<b>Read the text of your element</b>

<br>

<code>

h('.selector').readText();

</code>

<br>



<br>



<b>Erase the text of your element</b>

<br>

<code>

h('.selector').eraseText();

</code>

<br>



<br>



<b>Add an element with a class</b>

<br>

<code>

h('.selector').add(elementType, elementClass);

</code>

<br>



<b>Inject HTML to DOM</b>

<br>

<code>h('.selector').manifestAll('< div >Hermetic Dyanmic Element< /div >')

</code>



<b>Check if your element has a particular class</b>

<br>

<code>

h('.selector').hasClass('classNameToTest');

</code>

<br>



<b>Get CSS value of element, won't return inline styles</b>

<br>

<code>

h('.selector').setCSS('inlineCSSstring');

</code>

<br>



<b>Hermes has access to cookies</b>

<br>





<b>Set a Cookie</b>

<br>

<code>

Hermes.stealCookie(cookieName, cookieValue, daysTillExp);

</code>

<br>



<b>Get a Cookie</b>

<br>

<code>

Hermes.getCookieJar(cookieName);

</code>

<br>



<b>Check for a Cookie</b>

<br>

<code>Hermes.checkCookieJar(checkForCookie);</code>

<br>



<b>Delete a cookie</b>

<br>

<code>

Hermes.eatCookie(cookieToDelete);

</code>

<br>



<b>Hermes also has access to Local Storage</b>

<br>

<br>

<b>Set Local Storage</b>

<br>

<code>

Hermes.meetsYourBrowser(name, value);

</code>

<br>



<b>Get Local Storage</b>

<br>

<code>

Hermes.remembersYou(localstorageKeyName);

</code>

<br>



<b>Delete Local Storage Key</b>

<br>

<code>

Hermes.forgotYou(localStorageName);

</code>