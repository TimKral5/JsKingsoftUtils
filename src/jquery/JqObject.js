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
        elements.forEach(x => { results.push(new JqElement(x)) });
        return new JqElementCollection();
    }

    /**
     * @returns {JqElement}
     */
    parent() {
        return new JqElement(this.element.parentElement);
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