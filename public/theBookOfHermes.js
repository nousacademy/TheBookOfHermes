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

        return Hermes;
    }
    if (typeof(Hermes) === 'undefined') {
        window.Hermes = theAll();
    }
})(window);