import Listener from "./Listener";


class Observer {
	constructor(){
		this.listeners = new Array();
		this.executing = undefined;
	}	
	
	addElement (aElement){
		console.log("addElement", aElement);
		this.listeners.push(new Listener(aElement));
	}
	
	execute(){
		if(typeof this.executing !== "undefined")
			clearTimeout(this.executing);
		
		this.executing = setTimeout(( () => {
				console.log("execute");
				const viewport = {
						width: window.innerWidth,
						height : window.innerHeight
				};
				this.listeners.forEach((aListener) => {
					aListener.doChecking(viewport);
			});
		}).bind(this), 250);
	
	}
}



export default Observer;