export class JqElement {
    static jq(attr) {
        if (typeof attr == "string")
            return new JqElement(document.querySelector(attr));
        if (typeof attr == "object") {
            const { op, par, type } = attr;
            /** @type {HTMLElement} */
            var _res = null;

            if (
                op == "create"
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
            else if (
                op == "remove"
            ) {

            }
            else {
                
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
        return new JqElement(this.element.parentElement);
    }

    static body = JqElement.jq("body");
    static html = JqElement.jq("html");
    static head = JqElement.jq("head");
}