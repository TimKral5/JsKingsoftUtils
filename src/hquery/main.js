import * as jquery from '../jquery/main';

export function setup() {
    // Parent Attribute
    document.querySelectorAll('[data-hq-parent]').forEach(e => {
        var attr = e.getAttribute('data-hq-parent');
        e.remove();
        var parent = document.querySelector(attr);
        parent.appendChild(e);
    });
    
    // Tab-System
    var tablinks = jquery.JqElement.body.children("[data-hq-tablink]");
    tablinks.forEach(e => e.element.onclick = () => {
        var tabgroups = jquery.JqElement.body.children("[data-hq-tabgroup]");
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
