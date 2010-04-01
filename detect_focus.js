/** 
    We use this if the browser does not support the html5 document.activeElement method
    @link http://www.w3.org/TR/html5/editing.html#document-level-focus-apis
    @author James Broad
*/
(function(el) {
    var handleFocus = function(){
        // Handle !IE browsers that do not support the document.activeElement property
        document.addEventListener("focus", function(e){
            if (e && e.target){
                e.target == document ? null : e.target;
                document.activeElement = e.target;
                if(window.console && window.console.log){
                    console.log('document.activeElement', document.activeElement);
                }
            }
        }, true);
    };
        
    // Covering instance where script node is added in the head tag. Brute force baby.
    setTimeout(function(){
        while(!document.activeElement){
            try{
                document.activeElement = document;
                if(window.console && window.console.log){
                    console.log('document.activeElement is not in this browser, we can run our code');
                }
                handleFocus();
                break;
            } catch(e) {
                if(window.console && window.console.log){
                    console.log(e);
                }
                break;
            }    
        }
    }, 10);
})(document);

if(!document.hasFocus || !HTMLElement.hasFocus){
    HTMLDocument.prototype.hasFocus = HTMLElement.prototype.hasFocus = function(){
        return (this == document.activeElement);
    }
}