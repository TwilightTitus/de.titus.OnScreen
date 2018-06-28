import Observer from "./Observer";
const TRIGGERS = ['scroll', 'resize', 'load'];
const OBSERVERINSTANCE = new Observer();
TRIGGERS.forEach(event =>addEventListener(event, OBSERVERINSTANCE.execute.bind(OBSERVERINSTANCE)));

const findObservableElements = function(){
	let items = document.querySelectorAll("[data-onscreen]"); 
	Array.prototype.forEach.call(items, function (item) {
		OBSERVERINSTANCE.addElement(item);
	});	
	OBSERVERINSTANCE.execute();	
};
if (window.MutationObserver) {
    addEventListener('DOMContentLoaded', () => {
    	findObservableElements();
        new MutationObserver(findObservableElements).observe(document.body, { attributes: true, childList: true, subtree: true });
    });
}



if (typeof $ !== "undefined") {
	$.fn.OnScreen = function() {	
		OBSERVERINSTANCE.addElement(this[0]);
	}
}

