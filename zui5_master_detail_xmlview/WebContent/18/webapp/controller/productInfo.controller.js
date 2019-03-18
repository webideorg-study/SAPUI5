sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "webapp/model/formatter"
], 
        
function(Controller, JSONModel, formatter){
    "use strict";
    
    return Controller.extend("webapp.controller.productInfo", {
    	
    	formatter: formatter,
    	
        // initialization
        onInit: function(){
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({
                productid: "10000",
                productname: "Micro Projector"
            });
            this.getView().setModel(oModel);
        }//,
        
//        // convert to upper case
//        toUpper: function(sValue){
//            return sValue && sValue.toUpperCase();
//        }
    });
});