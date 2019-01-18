//sap.ui.controller("buttondemo.controller.buttondemo", {
//	
//	onButtonPressed: function() {
///*        jQuery.sap.require("sap.m.MessageBox");
//        sap.m.MessageBox.information("Hello from MVC.", {
//            title: "SAPUI5 MVC test"
//        });*/
//		alert("Hello");
//    }
//
///**
//* Called when a controller is instantiated and its View controls (if available) are already created.
//* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
//* @memberOf 06.webapp.master
//*/
////	onInit: function() {
////
////	},
//
///**
//* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
//* (NOT before the first rendering! onInit() is used for that one!).
//* @memberOf 06.webapp.master
//*/
////	onBeforeRendering: function() {
////
////	},
//
///**
//* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
//* This hook is the same one that SAPUI5 controls get after being rendered.
//* @memberOf 06.webapp.master
//*/
////	onAfterRendering: function() {
////
////	},
//
///**
//* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
//* @memberOf 06.webapp.master
//*/
////	onExit: function() {
////
////	}
//
//});



sap.ui.define(
    ["sap/ui/core/mvc/Controller"], 
    function(Controller){
        "use strict";

        return Controller.extend("buttondemo.controller.buttondemo", {
        	onButtonPressed: function() {
                sap.m.MessageToast.show("Hello!",{
                    my: "center center",
                    at: "center center"
                });
            }
        });
    }
);