sap.ui.define([
       "sap/ui/core/mvc/Controller",
       "sap/ui/core/UIComponent",
       "sap/ui/core/routing/History"
	],
    
	function(Controller, UIComponent, History){
		"use strict";
		
        return Controller.extend("webapp.controller.Detail",{
        	
/*          onNavPress: function(oEvent){
                oApp.back();
            }*/
        	
        	onInit: function(){
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);	
			},
			
			onNavPress: function() {
				var oHistory = History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();
				
				if (sPreviousHash != undefined){
					window.history.go(-1);
				}else{
					var oRouter = UIComponent.getRouterFor(this);
					oRouter.navTo("master",{}, true);
				}
			},
			
			_onObjectMatched: function(oEvent) {			
				var sPath = decodeURIComponent(oEvent.getParameter("arguments").supplierPath);
				//getParameters(arguments) -- key-value pair
				console.log(oEvent.getParameter("arguments"));
				console.log(oEvent.getParameter("arguments").supplierPath);
				
				// 第一种方式，视图绑定
				//this.getView().bindElement({path: sPath});
				
				
				//byId 方法的使用还是比较模糊
				console.log(this.getView().getId());
				console.log(this.getView().byId("details"));
				console.log(sap.ui.getCore().byId("__xmlview2--details"));
				
				// 第二种方式，元素绑定
				this.getView().byId("details").bindElement({path: sPath});
			}
        
        });
    }
);