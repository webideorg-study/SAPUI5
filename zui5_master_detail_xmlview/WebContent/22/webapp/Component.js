sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel"
    ], 
        
    function(UIComponent, JSONModel, ResourceModel){
		"use strict";
		
        return UIComponent.extend("webapp.Component", {
        	
/*            createContent: function() {
                UIComponent.prototype.createContent.apply(this, arguments);
                
                // load application data
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData("webapp/service/data.json");
                this.setModel(oModel);
                
                // app view(root view)
                var oAppView = sap.ui.view("appView", {
                    type: sap.ui.core.mvc.ViewType.XML,
                    viewName: "webapp.view.App"
                })
                
                oApp = oAppView.byId("app");
                return oAppView;                
            }*/


/*            createContent: function() {
                // application data
                var oModel = new JSONModel(this.getMetadata().getConfig().serviceUrl);
                this.setModel(oModel);
                
                // root view
                var oRootView = UIComponent.prototype.createContent.apply(this, arguments);
                
                // application
                oApp = oRootView.byId("app");
                
                return oRootView;               
            }*/
        	
        	
        	
/*        	// meta-data
            metadata: {
                "rootView": "webapp.view.App",
                "config": {
                    "serviceUrl": "service/data.json",
                    "i18nBundle": "webapp.i18n.i18n"
                }
            },
            
            // initialization
            init: function(){
                UIComponent.prototype.init.apply(this, arguments);
                
                var mConfig = this.getMetadata().getConfig();
                
                // resource bundle
                var oResourceModel = new ResourceModel({
                    bundleName: mConfig.i18nBundle
                });
                this.setModel(oResourceModel, "i18n");              

                // application data
                var oModel = new JSONModel(mConfig.serviceUrl);
                this.setModel(oModel);
            },
            
            createContent: function() {
                // root view
                var oRootView = UIComponent.prototype.createContent.apply(this, arguments);
                oApp = oRootView.byId("app");
                
                return oRootView;               
            }*/
        	
        	metadata: {
    			manifest: "json"
    		 },

    		init : function () {
    			// call the base component's init function
    			UIComponent.prototype.init.apply(this, arguments);

    			// create the views based on the url/hash
    			this.getRouter().initialize();
    		}
        
        });
    }

);