class Listener {
	constructor(aElement){
		this.element = aElement;
		this.settings = {
			threshold : 1,
			offset : {
				top:0 ,
				right:0 ,
				bottom :0,
				left :0				
			}
		};
	}
	
	doChecking(aScreenData){
		if(this.__inViewport()){
			console.log("inview", this.element);
		}
	}
	
	__inViewport() {
	    const { top, right, bottom, left, width, height } = this.element.getBoundingClientRect();

	    const intersection = {
	        t: bottom,
	        r: window.innerWidth - left,
	        b: window.innerHeight - top,
	        l: right
	    };

	    const threshold = {
	        x: this.settings.threshold * width,
	        y: this.settings.threshold * height
	    };

	    return intersection.t > (this.settings.offset.top    + threshold.y)
	        && intersection.r > (this.settings.offset.right  + threshold.x)
	        && intersection.b > (this.settings.offset.bottom + threshold.y)
	        && intersection.l > (this.settings.offset.left   + threshold.x);

	}
}





export default Listener;