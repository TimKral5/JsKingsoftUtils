(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.kingsoft = {}));
})(this, (function (exports) { 'use strict';

    /**
     * JQuery by Tim Kral
     * @version {1.0.0}
     */

    /**
     * element returned by jq()
     */
    class JqElement$1 {
        /**
         * 
         * @param {string} query CSS-Query 
         * @returns {JqElement | undefined} Created Instance from query
         */
        static jq(query) {
            if (typeof query == "string")
                return new JqElement$1(document.querySelector(query));
            else {
                console.error("'attr' must be a string!");
                return undefined;
            }
        }

        /**
         * 
         * @param {HTMLElement} obj 
         */
        constructor(obj) {
            if (typeof obj == "undefined")
                return null;
            this.element = obj;
        }

        /**
         * 
         * @returns {string}
         */
        type() {
            if (this.element != undefined)
                return this.element.nodeName;
            return null;
        }

        /**
         * @type {HTMLElement}
         */
        element;

        /**
         * @param {string} id
         * @returns {string|undefined}
         *//**
        * @param {string} id
        * @param {string} value 
        * @returns {JqElement|undefined}
        */
        attr(id, value) {
            if (typeof id != "string") {
                return undefined;
            }
            if (typeof value == "undefined") {
                return this.element.getAttribute(id);
            }
            else {
                if (typeof value == "number") {
                    if (value == 0)
                        this.element.removeAttribute(id);
                }
                else
                    this.element.setAttribute(id, value);
                return this;
            }
        };

        /**
         * 
         * @see {@link JqElement.jq}
         */
        child(query) { jq(query); }

        /**
         * 
         * @param {string} query 
         * @returns {JqElementCollection}
         */
        children(query) {
            var elements = this.element.querySelectorAll(query);
            var results = [];
            elements.forEach(x => { results.push(new JqElement$1(x)); });
            return new JqElementCollection(results);
        }

        /**
         * @returns {JqElement}
         */
        parent() {
            return new JqElement$1(this.element.parentElement);
        }

        /**
         * create a new Element inside the current
         * @param {{tag:string,attributes:{[key:string]:string},innerHTML:string, str:string}} arg
         * @returns {JqElement} the new element
         *//**
        * @param {string} arg
        * @returns {undefined} the new element
        */
        create(arg) {
            if (typeof arg == "string") {
                this.element.append(arg);
                return undefined;
            }
            var { tag = "div", attributes = {}, innerHTML = "", str = "" } = arg;
            var e = document.createElement(tag);
            for (var key in attributes) {
                e.setAttribute(key, attributes[key]);
            }
            e.innerHTML = innerHTML;

            this.element.appendChild(e);
            return new JqElement$1(e);
        }

        /**
         * removes the 
         * @param {string} query
         * @returns {this}
         */
        remove(query) {
            document.removeChild(this.element.querySelectorAll(query));
            return this;
        }

        /**
         * 
         * @param {string} event 
         * @param {(this:HTMLElement,ev:Event)=>void} func
         * @returns {JqElement}
         */
        on(event, func) {
            this.element.addEventListener(event, func);
            return this;
        }

        /**
         * 
         * @param {string} html 
         */
        innerHTML(html) {
            this.element.innerHTML = html;
        }

        /**
         * @param {string} prop
         * @returns {string|undefined}
         *//**
        * @param {string} prop
        * @param {string} value 
        * @returns {JqElement|undefined}
        */
        css(prop, value) {
            if (typeof prop != "string") {
                return undefined;
            }
            if (typeof value == "undefined") {
                return this.element.style[prop];
            }
            else {
                this.element.style[prop] = value;
                return this;
            }
        }

        static body = JqElement$1.jq("body");
        static html = JqElement$1.jq("html");
        static head = JqElement$1.jq("head");
    }

    class JqElementCollection {
        /** @type {JqElement[]} */
        elements;
        /**
         * 
         * @param {JqElement[]} arr 
         */
        constructor(arr) {
            this.elements = arr;
        }
        /**
         * 
         * @param {(element: JqElement) => any} func 
         * @returns {any[]}
         */
        forEach(func) {
            this.elements.forEach(el => {
                func(el);
            });
        }
    }

    const JqElement = JqElement$1;
    const jq$1 = JqElement$1.jq;

    var main$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        JqElement: JqElement,
        jq: jq$1
    });

    const http = {
        get(url) {
            var req = new XMLHttpRequest();
            req.open("GET", url);
            req.send();
            return req.responseText;
        },

        /**
         * 
         * @param {string} url 
         * @param {{[key:string]:string}} body 
         * @returns 
         */
        post(url, body) {
            var req = new XMLHttpRequest();
            req.open("POST", url);
            req.setRequestHeader("Content-Type", "application/json");
            req.send(JSON.stringify(body));
            return req.responseText;
        }
    };

    var loaded_css = [];
    var loaded_js = [];

    const lazy = {
        addCSS(filename) {
            if (loaded_css.indexOf(filename) != -1)
                return;
            var head = document.getElementsByTagName('head')[0];

            var style = document.createElement('link');
            style.href = filename;
            style.type = 'text/css';
            style.rel = 'stylesheet';
            head.appendChild(style);

            loaded_css.push(filename);
        },

        addScript(filename) {
            if (loaded_js.indexOf(filename) != -1)
                return;

            var head = document.getElementsByTagName('head')[0];

            var script = document.createElement('script');
            script.src = filename;
            script.type = 'text/javascript';

            head.insertBefore(script, document.getElementsByTagName("script")[0]);

            loaded_js.push(filename);
        }
    };

    class WebClient {
        static http_get = http.get;
        static http_post = http.post;
        static lazy_css = lazy.addCSS;
        static lazy_js = lazy.addScript;
    }

    var main$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        WebClient: WebClient
    });

    /*
    HQuery:
    - Parent-Attribute: 
        [data-hq-parent]: moves the element into all elements, matching the entered query

    - Tab-System:
        * [data-hq-tablink]
        * [data-hq-tabgroup]
        * [data-hq-tab]
    */


    var tablinks;

    function setActiveTab(link) {
        var tabgroups = JqElement.body.children("[data-hq-tabgroup]");
        tabgroups.forEach(_e => {
            var args = link.split("/");
            if (_e.attr("data-hq-tabgroup") == args[0]) {
                var tabs = _e.children("[data-hq-tab]");
                tabs.forEach(t => t.parent().attr("data-hq-tabgroup") == args[0] ? t.attr("hidden", "") : null);
                tabs.forEach(tab => {
                    if (_e.attr("data-hq-tabgroup") == args[0] && tab.attr("data-hq-tab") == args[1]) {
                        tab.attr("hidden", 0);
                    }
                });
            }
        });
    }

    function setup() {
        // Parent Attribute
        document.querySelectorAll('[data-hq-parent]').forEach(e => {
            var attr = e.getAttribute('data-hq-parent');
            e.remove();
            var parent = document.querySelector(attr);
            parent.appendChild(e);
        });

        // Tab-System
        tablinks = JqElement.body.children("[data-hq-tablink]");
        tablinks.forEach(e => e.element.onclick = () => setActiveTab(e.attr("data-hq-tablink")));

        // lazy-load
        jq$1("html").children("[data-hq-lazy]").forEach(x => {
            x.attr("data-hq-lazy");
            WebClient.lazy_js();
        });
    }

    function loadHash() {
        var paths = 
            document.location.hash.replace("#","")
            .split(";");
        paths.forEach(element => {
            setActiveTab(element);
        });
    }

    var _hquery = /*#__PURE__*/Object.freeze({
        __proto__: null,
        setActiveTab: setActiveTab,
        setup: setup,
        loadHash: loadHash
    });

    /**t
     * @typedef {number} T
     */
    class Matrix {

        /**
         * @type {T[][]}
         */
        contents;

        /**
         * @returns {Matrix<T>}
         */
        constructor() {

            this.contents = [];
        }
        /**
         * 
         * @param {number} x
         * @param {number} y
         * @returns {T}
         */
        get = (x, y) => {
            if (x < this.contents.length)
                if (y < this.contents[x].length) 
                    return this.contents[x][y];
            return null;
        };

        set = (x, y, value) => {
            while (!(x < this.contents.length)) {
                this.contents.push([]);
            }
            if (!(y < this.contents[x].length)) {
                this.contents[x] = [];
            }
            this.contents[x][y] = value;
        };
    }

    var main = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': Matrix
    });

    (() => {
        setup();
    })();

    const hquery = _hquery;

    exports.hquery = hquery;
    exports.jquery = main$2;
    exports.math = main;
    exports.web = main$1;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
