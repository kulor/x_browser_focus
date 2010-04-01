Cross browser focus utilities
=============================

Get access to the getters of of focus management found in the HTML5 spec <http://www.w3.org/TR/html5/editing.html#document-level-focus-apis>

Get started
-----------
Place the script node (`<script type="text/javascript" src="detect_focus.js"></script>`) inside the `<head>` node or immediately after the opening body tag. We do this as we want to start capturing focus events as soon as possible.

Using
------
In your Javascript you can feel confident using `document.activeElement` and `element.hasFocus()`.

Examples
--------
    var fooEl = document.getElementById('foo');
    if(fooEl.hasFocus()){
        alert('Yay, foo has focus!');
    }
    
    document.addEventListener("focus", function(e){
        if(window.console && window.console.log){
            console.log(document.activeElement);
        }
    }, true);

Known Issues
------------
We use the focus event listener to log the active element in the example. This seems to be slightly buggy in Webkit browsers using a mouse and clicking. Try tabbing through to see the item update or just look in a browser that supports `console.log`.
    
Credits
-------
Many thanks to Dirk Ginader (<http://blog.ginader.de>) for all his help in this.