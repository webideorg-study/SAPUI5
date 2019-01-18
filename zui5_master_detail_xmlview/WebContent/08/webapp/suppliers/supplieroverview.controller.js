sap.ui.controller("suppliers.supplieroverview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf suppliers.supplieroverview
*/
    onInit: function() {        
        var oModel = sap.ui.model.json.JSONModel('models/suppliers.json');
        this.getView().setModel(oModel);
    }
});