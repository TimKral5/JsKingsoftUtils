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
        eType() {
            if (this.element != undefined)
                return this.element.nodeName;
            return null;
        }

        /**
         * @type {HTMLElement}
         */
        element;

        /**
         * If value is undefined, the value of the Attribute gets returned (string).
         * Is value a string, the value of the Attribute will be set to it (returns the ).
         * If value is 0 (number), the Attribute will be removed.
         * @param {string} id
         * @param {string | number | undefined} value 
         * @returns {JqElement | string | undefined}
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
            return new JqElementCollection();
        }

        /**
         * @returns {JqElement}
         */
        parent() {
            return new JqElement$1(this.element.parentElement);
        }

        /**
         * create a new Element inside
         * @param {{tag:string,attributes:{[key:string]:string},innerHTML: string} param0
         */
        create({ tag="div", attributes={}, innerHTML=""}) {
            var e = document.createElement(tag);
            for (var key in attributes) {
                e.setAttribute(key, attributes[key]);
            }
            e.innerHTML = innerHTML;

            this.element.appendChild(e);
        }

        /**
         * 
         * @param {string} event 
         * @param {(this:HTMLElement,ev:Event)=>void} func
         * @param {(this:HTMLElement)=>void2} func 
         */
        on(event, func) {
            this.element.addEventListener(event, func);
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

    var main$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        JqElement: JqElement,
        jq: jq$1
    });

    function setup() {
        // Parent Attribute
        document.querySelectorAll('[data-hq-parent]').forEach(e => {
            var attr = e.getAttribute('data-hq-parent');
            e.remove();
            var parent = document.querySelector(attr);
            parent.appendChild(e);
        });
        
        // Tab-System
        var tablinks = JqElement.body.children("[data-hq-tablink]");
        tablinks.forEach(e => e.element.onclick = () => {
            var tabgroups = JqElement.body.children("[data-hq-tabgroup]");
            tabgroups.forEach(_e => {
                var args = e.attr("data-hq-tablink").split("/");
                if (_e.attr("data-hq-tabgroup") == args[1]) {
                    var tabs = _e.children("[data-hq-tab]");
                    tabs.forEach(tab => {
                        if (tab.attr("data-hq-tab") == args[2]) {
                            tabs.forEach(t => t.attr("hidden", ""));
                            tab.attr("hidden", 0);
                        }
                    });
                }
            });
        });

    }

    var _hquery = /*#__PURE__*/Object.freeze({
        __proto__: null,
        setup: setup
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
    exports.jquery = main$1;
    exports.math = main;

    Object.defineProperty(exports, '__esModule', { value: true });

}));