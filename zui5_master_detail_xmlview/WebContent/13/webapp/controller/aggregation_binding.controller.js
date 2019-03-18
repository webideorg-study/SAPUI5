sap.ui.define(["sap/ui/core/mvc/Controller"], 
    function(Controller){
        "use strict";
        
        // controller name
        return Controller.extend("bindingtest.controller.aggregation_binding", {
            
            //-------------------------------
            // initialization
            //-------------------------------
            onInit: function() {
                // binding view with model
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.loadData('models/articles.json');
                this.getView().setModel(oModel);
                
                // Table object add items
                var oTable = this.getView().byId("table");
                oTable.bindItems({path: '/', factory: this.createCellsFactory});
            },
            
            //------------------------------------------------
            // Factory function to add cells for table
            //------------------------------------------------
            createCellsFactory: function(sId, oContext) {
            
                var oColumnListItem = new sap.m.ColumnListItem(sId, {vAlign: "Middle"});
                
                // first two cells are not dynamic
                oColumnListItem.addCell(new sap.m.Text({text: "{articleName}"}));
                oColumnListItem.addCell(new sap.m.ObjectMarker({type: "{type}", visibility: sap.m.ObjectMarkerVisibility.IconOnly}));      
                
                console.log(oContext);
                // third cell is dynamic
                var oHits = oContext.getProperty("hits");
                if (oHits >= 100) {
                    oColumnListItem.addCell(
                        new sap.ui.layout.VerticalLayout({
                            content: [
                               new sap.m.Text({text: "{hits}"}),
                               new sap.m.ObjectStatus({text:"热门", state:"Success"})
                            ]
                        })
                    )
                } else {
                    oColumnListItem.addCell(
                        new sap.m.Text({text: "{hits}"})
                    )       
                }
        
                return oColumnListItem;
            } // end of createCellsFactory()            
            
        });
    }
);