export const setup = () => _setup();

function _setup() {
    // Parent Attribute
    document.querySelectorAll('[data-hq-parent]').forEach(e => {
        var attr = e.getAttribute('data-hq-parent');
        e.remove();
        var parent = document.querySelector(attr);
        parent.appendChild(e);
    });
}