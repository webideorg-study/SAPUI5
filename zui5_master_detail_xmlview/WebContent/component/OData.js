function initialization() {


	var serviceUrl = "/zui5_master_detail_xmlview/proxy/sap/opu/odata/SAP/ZGW_PO_SRV?sap-client=200";
	// var serviceUrl = "proxy/sap/opu/odata/SAP/ZGW_PO_SRV?sap-client=200";
	console.log(serviceUrl);

	var oModel = new sap.ui.model.odata.v2.ODataModel(serviceUrl, {
		json : true,
		user : "xzhou030",
		password : "Pwc123456"
	// headers : {"content-type" : "application/json; charset=utf-8"}
	});

	// oModel.setUseBatch(false);

	// sap.ui.getCore().setModel(oModel);

	oModel.read("/POHeaderSet('4500000000')/Ebeln", {
		success : function(oData, oResponse) {
			console.log("PO Number: " + oData.Ebeln);
			console.log(oResponse);
		},
		error : function(oError) {
			console.log(oError);
		}
	});
}