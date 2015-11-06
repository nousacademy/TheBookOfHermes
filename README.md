# The Book Of Hermes
Lightweight Javascript DOM manipulation library

<img src='https://raw.githubusercontent.com/nousacademy/TheBookOfHermes/master/CorpusHermeticum/bookcover.jpg'>

The Hermetic documentation can be veiwed below. Anyone is welcome to fork and extend this library, or if you have any feature requests just submit an issue!

<b>DOM selector </b>
<br>
<code>
Hermes.DOMtraveller('#myID'); //gets ID
</code> 
<br> 
       or
<br>
<code>
Hermes.DOMtraveller('.myClass'); //gets Class
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
Hermes.listen(selector, eventName, function(e){console.log(e)})
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
Hermes.give = function(url, data) {   }
</code>
<br>

<b>Effects</b>
<br>
This will fade your element in, just pass in your element as a paramater.
<br>
<code>
Hermes.fadeIn(element);
</code>
<br>

<b>Basic DOM manipulation:</b>
<br>
<br>

<b>Hide your element</b>
<br>
<code>
Hermes.conceal(element);
</code>
<br>

<b>Show your element</b>
<br>
<code>
Hermes.reveal(element);
</code>
<br>

<b>Show & Hide your element</b>
<br>
<code>
Hermes.toggle(element);
</code>
<br>

<b>Remove element from DOM</b>
<br>
<code>
Hermes.destroy(element);
</code>
<br>

<b>Add element to DOM</b>
<br>
<code>Hermes.add(element);</code>
<br>

<b>Add a class to your element</b>
<br>
<code>
Hermes.addClass(element);
</code>
<br>

<b>Check if your element has a particular class</b>
<br>
<code>
Hermes.hasClass(element, classNameToTest);
</code>
<br>

<b>Get CSS value of element, won't return inline styles</b>
<br>
<code>
Hermes.getCssStaticVals(element, propertyName);
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





