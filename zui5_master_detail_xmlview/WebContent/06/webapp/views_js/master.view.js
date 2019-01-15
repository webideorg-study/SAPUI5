sap.ui.jsview("views_js.master", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf 06.webapp.master
	*/ 
	getControllerName : function() {
		return "views_js.master";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf 06.webapp.master
	*/ 
	createContent : function(oController) {
		/*
		 return new sap.m.Page({
		        title: "Title",
		        content: [
		        
		        ]
		 });
		 */
		var oButton = new sap.m.Button({
            text: "Click me",
            press: oController.onButtonPressed
        });
        
        return oButton;
	}

});
