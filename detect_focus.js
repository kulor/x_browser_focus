/** 
    We use this if the browser does not support the html5 document.activeElement method
    @link http://www.w3.org/TR/html5/editing.html#document-level-focus-apis
    @author James Broad
*/

(function(el) {
    // Handle !IE browsers that do not support the document.activeElement property
    if(!document.activeElement){
        if (document.addEventListener){ 
            document.addEventListener("focus", function(e){
		        if (e && e.target){
		            e.target == document ? null : e.target;
		            document.activeElement = e.target;
		        }
		    }, true);
        }
    }
})(document);
if(!document.hasFocus || !HTMLElement.hasFocus){
	HTMLDocument.prototype.hasFocus = HTMLElement.prototype.hasFocus = function(){
		if(this == document.activeElement){
			return true;
		} else {
			return false;
		}
	}
}