import * as jquery from '../jquery/main';
import * as  web from '../web/main';

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

export function setActiveTab(link) {
    var tabgroups = jquery.JqElement.body.children("[data-hq-tabgroup]");
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

export function setup() {
    // Parent Attribute
    document.querySelectorAll('[data-hq-parent]').forEach(e => {
        var attr = e.getAttribute('data-hq-parent');
        e.remove();
        var parent = document.querySelector(attr);
        parent.appendChild(e);
    });

    // Tab-System
    tablinks = jquery.JqElement.body.children("[data-hq-tablink]");
    tablinks.forEach(e => e.element.onclick = () => setActiveTab(e.attr("data-hq-tablink")));

    // lazy-load
    jquery.jq("html").children("[data-hq-lazy]").forEach(x => {
        var file = x.attr("data-hq-lazy");
        web.WebClient.lazy_js();
    })
}

export function loadHash() {
    var paths = 
        document.location.hash.replace("#","")
        .split(";");
    paths.forEach(element => {
        setActiveTab(element);
    });
}