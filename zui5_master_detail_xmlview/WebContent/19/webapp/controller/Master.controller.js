sap.ui.define(
    ["sap/ui/core/mvc/Controller"], 
        
    function(Controller){
        "use strict";
        
        return Controller.extend("webapp.controller.Master", {
            onListPress: function(oEvent){
                var sPageId = "detailView";
                oApp.to(sPageId);
                
                var oDetailPage = oApp.getPage(sPageId);
                
                var oContext = oEvent.getSource().getBindingContext();
                //console.log("Current Context: " + oContext);
                var sPath = oContext.getPath();
                console.log("Current Path: " + sPath);
                
                // 第一种方式
                //oDetailPage.setBindingContext(oContext);
                
                // 第二种方式
                oDetailPage.bindElement({path: sPath});
            }
        });
    }
);