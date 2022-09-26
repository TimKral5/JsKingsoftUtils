
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
}

var loaded_css = [];
var loaded_js = [];

const lazy = {
    addCSS(filename, ignoreIfLoaded = true) {
        if (ignoreIfLoaded && loaded_css.indexOf(filename) != -1)
            return;
        var head = document.getElementsByTagName('head')[0];

        var style = document.createElement('link');
        style.href = filename;
        style.type = 'text/css';
        style.rel = 'stylesheet';
        head.appendChild(style);

        loaded_css.push(filename);
    },

    addScript(filename, ignoreIfLoaded = true) {
        if (ignoreIfLoaded && loaded_js.indexOf(filename) != -1)
            return;

        var head = document.getElementsByTagName('head')[0];

        var script = document.createElement('script');
        script.src = filename;
        script.type = 'text/javascript';

        head.insertBefore(script, document.getElementsByTagName("script")[0]);

        loaded_js.push(filename);
    }
}

export class WebClient {
    static http_get = http.get;
    static http_post = http.post;
    static lazy_css = lazy.addCSS;
    static lazy_js = lazy.addScript;
}