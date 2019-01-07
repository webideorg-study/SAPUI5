sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent"
    ],
        
    function(Controller, UIComponent){
        "use strict";
        
        return Controller.extend("stonewang.sapui5.demo.controller.Master", {
        	
            onListPress: function(oEvent){
            	
/*            	// 跳转到detail view
                var sPageId = oApp.getPages()[1].getId();
                oApp.to(sPageId);
                
                // 设置detail page的bindingContext
                var oContext = oEvent.getSource().getBindingContext();
                var oDetailPage = oApp.getPage(sPageId);
                oDetailPage.setBindingContext(oContext);*/
            	
	    		var oRouter = UIComponent.getRouterFor(this);
	    		var oItem = oEvent.getSource();
	    		var sPath = oItem.getBindingContext().getPath();
	    		oRouter.navTo("detail", {
	    			 supplierPath: encodeURIComponent(sPath)
	    		});;
                
            },
            
            onLanButtonPress: function(oEvent){
                // 添加依赖包
                jQuery.sap.require("jquery.sap.resources");
                
                var sLocale = sap.ui.getCore().getConfiguration().getLanguage();
                var oBundle = jQuery.sap.resources({
                    url: "i18n/i18n.properties",
                    locale: sLocale
                })
                
                var sMessage = oBundle.getText("msgCurrLanguage", [sLocale]);
                alert(oBundle.getText("msgCurrLanguage", [sLocale]));
            }
            
        });
    }
);