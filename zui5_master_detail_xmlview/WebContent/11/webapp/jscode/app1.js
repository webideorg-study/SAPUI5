/**
 * openui5 application area
 */

sap.ui.getCore().attachInit(function() {
    // application data
    var oModel = sap.ui.model.json.JSONModel();
    oModel.loadData("models/suppliers.json");   

    sap.ui.getCore().setModel(oModel);
    
    //属性绑定的方法1：
    //var oText = new sap.m.Text({text: "{/Suppliers/0/Name}"});
    //var oInput = new sap.m.Input({value: "{/Suppliers/0/Name}"});
    
    //属性绑定的方法2：
    //var oText = new sap.m.Text().bindProperty("text", "/Suppliers/0/Name");
    //var oInput = new sap.m.Input().bindProperty("value", "/Suppliers/0/Name");
    
    /*
    var oText = new sap.m.Text().bindProperty("text", {
                                     path: "/Suppliers/0/Name",
                                     mode: sap.ui.model.BindingMode.OneWay
                                     //mode: sap.ui.model.BindingMode.TwoWay
                                 });
    
    var oInput = new sap.m.Input().bindProperty("value", {
                                       path: "/Suppliers/0/Name",
                                       mode: sap.ui.model.BindingMode.OneWay
                                       //mode: sap.ui.model.BindingMode.TwoWay
                                   });
    */
    
    //属性绑定的方法3：
    var oText = new sap.m.Text().bindText("/Suppliers/0/Name");
    var oInput = new sap.m.Input().bindValue("/Suppliers/0/Name");
    
    oText.placeAt("content");
    oInput.placeAt("content");
});