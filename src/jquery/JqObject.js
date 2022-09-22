/**
 * JQuery by Tim Kral
 * @version {1.0.0}
 */

/**
 * element returned by jq()
 */
export class JqElement {
    /**
     * 
     * @param {string} query CSS-Query 
     * @returns {JqElement | undefined} Created Instance from query
     */
    static jq(query) {
        if (typeof query == "string")
            return new JqElement(document.querySelector(query));
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
        elements.forEach(x => { results.push(new JqElement(x)) });
        return new JqElementCollection(results);
    }

    /**
     * @returns {JqElement}
     */
    parent() {
        return new JqElement(this.element.parentElement);
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
        return new JqElement(e);
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

    static body = JqElement.jq("body");
    static html = JqElement.jq("html");
    static head = JqElement.jq("head");
}

export class JqElementCollection {
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