Cross browser focus utilities
=============================

Get access to the getters of of focus management found in the HTML5 spec <http://www.w3.org/TR/html5/editing.html#document-level-focus-apis>

Get started:
-----------
Place the script node (`<script type="text/javascript" src="detect_focus.js"></script>`) inside the head node.

Using:
------
In your Javascript you can feel confident using `document.activeElement` and `element.hasFocus()`.

Example:
--------
    var fooEl = document.getElementById('foo');
    if(fooEl.hasFocus()){
        alert('Yay, foo has focus!');
    }