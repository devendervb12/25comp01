sap.ui.controller("smax.ui.empReg.view.InitialPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.InitialPage
*/
	onInit: function() {
		var serviceURL = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_BATCH25_PRODUCT_SRV/"
		var oModel = new sap.ui.model.odata.v2.ODataModel(serviceURL);
		this.getView().setModel(oModel);

	},
	onItemPress : function(evt){
		debugger;
		var productID = evt.getSource().getTitle(); 
this.getOwnerComponent().getRouter().navTo("nameProdDtl", {pid : productID });
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.InitialPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.InitialPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.InitialPage
*/
//	onExit: function() {
//
//	}

});