sap.ui.define(
    ["sap/ui/core/mvc/Controller"], 
        
    function(Controller){
        "use strict";
        
        return Controller.extend("webapp.controller.Master", {
            onListPress: function(oEvent){
            	
            	// 跳转到detail view
                var sPageId = oApp.getPages()[1].getId();
                
                console.log(oApp.getPages());
                console.log(oApp.getPages()[1].getId());
                
                //var sPageId = "appView--detailView";
                
                oApp.to(sPageId);
                
                // 设置detail page的bindingContext
                var oContext = oEvent.getSource().getBindingContext();
                var oDetailPage = oApp.getPage(sPageId);
                oDetailPage.setBindingContext(oContext);
                
            }
        });
    }
);