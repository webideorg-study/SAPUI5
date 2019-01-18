sap.ui.jsview("buttondemo.view.buttondemo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf buttondemo.view.buttondemo
	*/ 
	getControllerName : function() {
		return "buttondemo.controller.buttondemo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf buttondemo.view.buttondemo
	*/ 
	createContent : function(oController) {
		
		var oButton = new sap.m.Button({
            text: "Please click.",
            press: oController.onButtonPressed
        });
        
        return oButton;
	}

});
