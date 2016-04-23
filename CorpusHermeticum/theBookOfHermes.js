/*
 * The Book of Hermes
 * - The lightest JS book to have in your library
 *
 * Copyright Nous Academy and is maintained by Hermes
 * The ancient Hermetic art of imitation, is released under the MIT license
 * https://github.com/nousacademy/TheBookOfHermes
 *
 * Date: Eternity
 *
 *  "To become the best you must imitate the best." - Hermes
 *
 */

(function(theAll) {

    var Hermes = function(selector, context) {
        return new Hermes.invoke(selector, context);
    }


    // Hermetic methods
    Hermes.prototype = {
        listen: function(eventName, fn) {
            for (var i = 0; i < this.length; i++) {
                this[i].addEventListener(eventName, function(event) {
                    var target = event.target;
                    fn(target)
                }, false);
            }
            return this;
        },
        vanquish: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].parentNode.removeChild(this[i]);
            }
            return this;
        },
        conceal: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].style.display = 'none';
            }
            return this;
        },
        reveal: function() {
            for (var i = 0; i < this.length; i++) {
                this[i].style.display = 'block';
            }
            return this;
        },
        write: function(textString) {
            for (var i = 0; i < this.length; i++) {
                var text = document.createTextNode(textString);
                this[i].appendChild(text);
            }
            return this;
        },
        reWrite: function(textString) {
            var rewrite = '';
            for (var i = 0; i < this.length; i++) {
                var rewrite = this[0].childNodes[0].data = textString;
            }
            return rewrite;
        },
        switch: function() {
            for (var i = 0; i < this.length; i++) {
                var el = this[i];
                if (el.style.display !== 'none') {
                    el.style.display = 'none';
                } else {
                    el.style.display = '';
                }
            }
            return this;
        },
        add: function(elementType, elementClass) {
            var newElement = document.createElement(elementType);
            newElement.className = elementClass;
            for (var i = 0; i < this.length; i++) {
                this[i].appendChild(newElement);
            }
            return this;
        },
        hasClass: function(myClass) {
            for (var i = 0; i < this.length; i++) {
                var classNames = this[i].className.split(/\s+/);
                if (classNames.indexOf(myClass) > -1) {
                    return true;
                    break;
                }
            }
        },
        addClass: function(classToAdd) {
            for (var i = 0; i < this.length; i++) {
                this[i].className += " " + classToAdd;
            }
            return this;
        },
        removeClass: function(classToRemove) {
            for (var i = 0; i < this.length; i++) {
                this[i].className = this[i].className.replace(new RegExp(classToRemove), '');
            }
            return this;
        },
        replaceClass: function(classToRemove, classToReplaceWith) {
            for (var i = 0; i < this.length; i++) {
                this[i].className = this[i].className.replace(new RegExp(classToRemove), classToReplaceWith);
            }
            return this;
        },
        //h('div').manifestAll('<div style="color:red">YOOOOOOO!!!!!!</div>')
        manifestAll: function(html) {
            for (var i = 0; i < this.length; i++) {
                this[i].innerHTML = html;
            }
            return this;
        },
        // uasge - h('div').craftUnitInAll()
        multiplyNodes: function() { // html, props
            var data = [{
                "node": "div",
                "text": "Hi there",
                "class": "firstClass"
            }, {
                "node": "span",
                "text": "Hello!",
                "class": "secondClass"
            }]
            var nodeArr = [];
            for (var i = 0; i < data.length; i++) {

                var html = data[i];
                var el = document.createElement(html.node);
                nodeArr.push(el)
                console.log(el)
                for (var key in html){
                     // console.log(html[key]);

                            if (key === "text") {
                                var text = document.createTextNode(html[key]);
                                el.appendChild(text)
                                // console.log(text)
                            }
                            if(key !== "node" && key !== "text"){
                                el.setAttribute(key, html[key]);
                            }

                            if(i === 0){
                                this[i].appendChild(el)
                                console.log('on 0 iteration')
                            }
                            if (i > 0) {
                                // console.log(i)
                                debugger;
                                     nodeArr.slice(-2)[0].appendChild(el)
                                    // console.log(nodeArr.slice(-1)[0] )
                                // el.appendChild(el)
                                console.log(nodeArr)

                            }

                }


            }

            // var nodeArr = [];
            // for (var key in data) {

            //     var appendThis = this[key];

            //     var arr = data[key];

            //     for (var i = 0; i < arr.length; i++) {

            //         var obj = arr[i];
            //         // console.log(obj) // need this one to get previous item and append it

            //         for (var prop in obj) {
            //             // debugger;


            //             // console.log(a)
            //             if (obj.hasOwnProperty(prop)) {
            //                 // console.log(prop + " = " + obj[prop]);
            //                 // console.log(prop)


            //                 if (prop === "node") {
            //                     var node = document.createElement(obj[prop]);
            //                      nodeArr.push(node)
            //                         // console.log(nodeArr)
            //                 }
            //                 if (prop === "text") {
            //                     var text = document.createTextNode(obj[prop]);
            //                     node.appendChild(text)
            //                     // console.log(text)
            //                 }
            //                 if(prop !== "node" && prop !== "text"){
            //                     node.setAttribute(prop, obj[prop]);
            //                 }

            //                 if(i === 0){
            //                     this[i].appendChild(node)
            //                     // console.log('on 0 iteration')
            //                 }
            //                 if (i > 0) {
            //                 console.log(i)
            //                       nodeArr.slice(-1)[0].appendChild(node)
            //                       // console.log(nodeArr.slice(-1)[0] )
            //                       // console.log(node.childNodes)

            //                 }




            //             }
            //         }
            //     }
            // }




        }

    };



    // Invoke Hermes
    Hermes.invoke = function(selector, context) {

        var self = this;
        self.context = context || document;
        self.selector = selector || '';
        self.spellVers = '1.0';
        var nodes = self.context.querySelectorAll(self.selector);

        for (var i = 0; i < nodes.length; i++) {
            this[i] = nodes[i];
        }

        this.length = nodes.length;
        return this;
    }

    // Hermetic plugins - add your own by calling h.spell.myPlugin
    Hermes.theft = function(url, stolen) {
        var request = new XMLHttpRequest();
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                stolen(data);
            } else {
                throw 'Hermes couldn\'t steal that data for you.'
            }
        }
        request.open('GET', url, true);
        request.send(null);
    }

    Hermes.aware = function() {
        // media queries made simple
    }

    Hermes.give = function(url, data) {
        var request = new XMLHttpRequest();
        var data = JSON.stringify(data);
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(data);
    }

    Hermes.ouroboros = function(array, cb) {
        var i;
        for (i = 0; i < array.length; i++) {
            cb(array[i])
        }
    };

    Hermes.getCookieJar = function(cname) { // get cookie
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return "Hermes can\'t find that cookie in the cookie jar!";
    }

    Hermes.stealCookie = function(cname, cvalue, exdays) { // set cookie
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    Hermes.checkCookieJar = function(cookieInJar) { // check for cookie
        Hermes.getCookieJar(cookieInJar);
    }

    Hermes.eatCookie = function(cname) { // delete cookie
        document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    Hermes.meetsYourBrowser = function(name, value) { //set local storage
        localStorage.setItem(name, value);
    }

    Hermes.remembersYou = function(name) { // get local storage
        localStorage.getItem(name);
    }
    Hermes.forgotYou = function(name) { //delete local storage
        localStorage.removeItem(name);
    }

    Hermes.invoke.prototype = Hermes.prototype;

    theAll.Hermes = theAll.h = Hermes;



}(window))