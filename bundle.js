(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.kingsoft = {}));
})(this, (function (exports) { 'use strict';

    const setup = () => _setup();

    function _setup() {
        // Parent Attribute
        document.querySelectorAll('[data-hq-parent]').forEach(e => {
            var attr = e.getAttribute('data-hq-parent');
            e.remove();
            var parent = document.querySelector(attr);
            parent.appendChild(e);
        });
    }

    var _hquery = /*#__PURE__*/Object.freeze({
        __proto__: null,
        setup: setup
    });

    class JqElement$1 {
        static jq(attr) {
            if (typeof attr == "string")
                return new JqElement$1(document.querySelector(attr));
            if (typeof attr == "object") {
                const { op, par, type } = attr;
                /** @type {HTMLElement} */
                var _res = null;

                if (op == "create"
                    && par != undefined
                    && type != undefined
                ) {
                    /** @type {HTMLElement} */
                    var _par;
                    if (typeof par == "string")
                        _par = document.querySelector(par);
                    else
                        _par = par;

                    /** @type {HTMLElement} */
                    var obj = document.createElement(type);
                    _par.appendChild(obj);
                    _res = obj;

                }
                return _res;
            }
        }

        constructor(obj) {
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
         * 
         * @param {string} id 
         * @param {string | undefined} value 
         * @returns {string | null | undefined}
         */
        attr(id, value) {
            if (typeof id != "string") {
                return undefined;
            }
            if (typeof value == "undefined") {
                return this.element.getAttribute(id);
            }
            else {
                this.element.setAttribute(id, value);
                return this.element.getAttribute(id);
            }
        };

        /**
         * 
         * @param {string} query
         * @returns {JqElement} 
         */
        child(query) {
            /**
             * @type {JqElement}
             */
            var obj = jq(query);

            return obj;
        }

        /**
         * @returns {JqElement}
         */
        parent() {
            return new JqElement$1(this.element.parentElement);
        }

        static body = JqElement$1.jq("body");
        static html = JqElement$1.jq("html");
        static head = JqElement$1.jq("head");
    }

    const JqElement = JqElement$1;
    const jq$1 = JqElement$1.jq;

    var _jquery = /*#__PURE__*/Object.freeze({
        __proto__: null,
        JqElement: JqElement,
        jq: jq$1
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
    const jquery = _jquery;

    exports.hquery = hquery;
    exports.jquery = jquery;
    exports.math = main;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
