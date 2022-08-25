/**t
 * @typedef {number} T
 */
export default class Matrix {

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