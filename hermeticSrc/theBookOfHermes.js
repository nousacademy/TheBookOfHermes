/*
 * The Book of Hermes
 * - The lightest JS book you should have in your library
 *
 * Copyright Nous Academy and is maintained by Hermes
 * The ancient Hermetic art of imitation, is released under the MIT license
 * https://github.com/nousacademy/TheBookOfHermes
 *
 * Date: Eternity
 */
(function(window) {
    'use strict'

    function theAll() {
        var Hermes = {};
        Hermes.ouroboros = function(array, circular) {
            var i;
            for (i = 0; i < array.length; i++) {
                circular(array[i])
            }
        };
        Hermes.listen = function(elSelector, eventName, fn) {
            var element = document.querySelector(elSelector);

            element.addEventListener(eventName, function(event) {
                var target = event.target;
                        fn(el.parentNode);
            });
        }
        Hermes.theft = function(url, stolen) {
            var request = new XMLHttpRequest();
            request.open('GET', url, true);

            request.onload = function() {
                if (request.status >= 200 && request.status < 400) {
                    // Success!
                    var data = JSON.parse(request.responseText);

                    stolen(data);
                } else {
                    console.log('Hermes couldn\'t steal that data for you.')

                }
            };
            request.onerror = function(caught) {
                stolen(caught);
            };
            request.send();
        }
        Hermes.give = function(url, data) {
            var request = new XMLHttpRequest();
            var data = JSON.stringify(data);
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            request.send(data);
        }
        Hermes.DOMtraveller = function(selector, context) {
            context = context || document;
            var el = context.querySelectorAll(selector);
            return Array.prototype.slice.call(el);
        }
        Hermes.fadeIn = function(el) {
            el.style.opacity = 0;

            var last = new Date();
            var tick = function() {
                el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
                last = new Date();

                if (el.style.opacity < 1) {
                    (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
                }
            };

            tick();
        }
        Hermes.conceal = function(el) {
            el.style.display = 'none';
        }
        Hermes.reveal = function(el) {
            el.style.display = '';
        }
        Hermes.toggle = function(el) {
            if (el.style.display !== 'none') {
                el.style.display = 'none';
            } else {
                el.style.display = '';
            }
        }
        Hermes.destroy = function(el) {
            el.parentNode.removeChild(el);
            return 'Hermes has destroyed your node!'
        }
        Hermes.add = function(el) {
            parent.appendChild(el);
        }
        Hermes.addClass = function(el, className) {
            if (el.classList) {
                el.classList.add(className);
            } else {
                el.className += ' ' + className;
            }

        }
        Hermes.hasClass = function(element, classNameToTestFor) {
            var classNames = element.className.split(' ');
            for (var i = 0; i < classNames.length; i++) {
                if (classNames[i].toLowerCase() == classNameToTestFor.toLowerCase()) {
                    return true;
                }
            }
            return false;
        }
        Hermes.getCssStaticVals = function(selectorText, propertyName) { // ex: Hermes.getCssKeyValue('body', 'color')
            // search backwards because the last match is more likely the right one
            for (var s = document.styleSheets.length - 1; s >= 0; s--) {
                var cssRules = document.styleSheets[s].cssRules ||
                    document.styleSheets[s].rules || []; // IE support
                for (var c = 0; c < cssRules.length; c++) {
                    if (cssRules[c].selectorText === selectorText)
                        return cssRules[c].style[propertyName];
                }
            }
            return 'Hermes has travelled all your CSS files & can\'t find any styles associated with this selector.';
        }
        Hermes.stealCookie = function(cname, cvalue, exdays) { // set cookie
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        }
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
        return Hermes;
    }
    if (typeof(Hermes) === 'undefined') {
        window.Hermes = theAll();
    }
})(window);