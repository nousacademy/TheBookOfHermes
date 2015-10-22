# The Book Of Hermes
Lightweight Javascript DOM manipulation library

<img src='https://github.com/nousacademy/TheBookOfHermes/blob/master/public/bookcover.jpg'>

Hermes creates the window.Hermes object. The documentation can be veiwed below:

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
Hermes.ouroboros(myArray, function(e){
	console.log(e);
});
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
Hermes.add(element);
<br>




