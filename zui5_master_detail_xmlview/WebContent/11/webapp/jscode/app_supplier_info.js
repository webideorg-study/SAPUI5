/**
 * openui5 application area
 * show supplier information
 * 
 * Written by Stone Wang on Jan 08, 2017
 */

sap.ui.getCore().attachInit(function() {                
    
    // application data
    var oModel = sap.ui.model.json.JSONModel();
    oModel.loadData("models/suppliers.json");   

    sap.ui.getCore().setModel(oModel);      

    sap.ui.xmlview({
        viewName: "stone.demo.view.supplier_info"
    }).placeAt("content");  

});