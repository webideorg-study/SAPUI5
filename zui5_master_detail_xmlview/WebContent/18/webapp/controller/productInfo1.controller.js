sap.ui.define([
     "sap/ui/core/mvc/Controller",
     "sap/ui/model/json/JSONModel",
     "webapp/model/types",
], 
    
function(Controller, JSONModel, types){
        "use strict";

        return Controller.extend("webapp.controller.productInfo1", {
            
            types: types,     
            
            // initialization
            onInit: function() {
                // application data
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({
                    productid: "10000",
                    productname: "Micro Projector",
                    phone:"13612345678"
                }); 
                
                var oView = this.getView();
                
                // binding model to view
                oView.setModel(oModel);                     
                
                sap.ui.getCore().getMessageManager().registerObject(oView, true);
            }  
        });
    }
);