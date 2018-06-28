const STATES = {
		OUT_OF_VIEW : "out-of-view",
		IN_VIEW : "in-view"
};

class Listener {
	constructor(aElement){
		this.element = aElement;
		this.state = STATES.OUT_OF_VIEW;		
	}
	
	doChecking(aViewport){
		console.log("doChecking");
		const bound = this.element.getBoundingClientRect();
		
		
		console.log("bound", bound);
		console.log("aViewport", aViewport);
		
		
		if(this.state === STATES.OUT_OF_VIEW)
			this.__enteringView(bound, aViewport);
		else
			this.__isOutOfViewing(bound, aViewport);
		
		
		console.log(this.state);
		
	}
	
	__enteringView(aBound, aViewport) {
		if(aBound.top < aViewport.height || (aBound.bottom > 0 && aBound.bottom < aViewport.height))
			this.state = STATES.IN_VIEW;		
	}	
	__isOutOfViewing(aBound, aViewport){
		if(aBound.top > aViewport.height || aBound.bottom < 0)
			this.state = STATES.OUT_OF_VIEW;	
			
	}
}





export default Listener;