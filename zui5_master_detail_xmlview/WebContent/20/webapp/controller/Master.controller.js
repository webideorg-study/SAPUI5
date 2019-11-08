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
                
                //console.log(sap.ui.getCore().byId("__xmlview0--detailView").getId());
                
                // 设置detail page的bindingContext
                var oContext = oEvent.getSource().getBindingContext();
                var oDetailPage = oApp.getPage(sPageId);
                // 第一种方式
                //oDetailPage.setBindingContext(oContext);
                
                // 第二种方式
                var sPath = oContext.getPath();
                oDetailPage.bindElement({path: sPath});
                
            }
        });
    }
);