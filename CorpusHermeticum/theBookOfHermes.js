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