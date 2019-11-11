sap.ui.controller("suppliers.supplieroverview", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf suppliers.supplieroverview
*/
    onInit: function() {        
        var oModel = sap.ui.model.json.JSONModel('models/suppliers.json');
        //第一种设置View与Model的绑定
        //this.getView().setModel(oModel);
        
        //第二种设置Table与Model的绑定
        //1.a view-local ID of an element
        var oView = this.getView();
        var oTable = oView.byId("firstPage2--table");
        console.log("--------oView--------");
        console.log(oView.toString());
        
        
        //2.globally unique ID of an element
//        var oTable = sap.ui.getCore().byId("table");
//        console.log(oTable);
        
        
        console.log(oTable.getId());
        oTable.setModel(oModel);
    }
});