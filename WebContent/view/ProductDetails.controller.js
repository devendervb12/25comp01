sap.ui.controller("smax.ui.empReg.view.ProductDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.ProductDetails
*/
	onInit: function() {
		var router = this.getOwnerComponent().getRouter(this);
		
		var oController = this;
		
		router.getRoute("nameProdDtl").attachPatternMatched(function(evt){
			var productId = evt.getParameters().arguments.pid;
			var serviceURL = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_BATCH25_PRODUCT_SRV"
			var oModel = new sap.ui.model.odata.v2.ODataModel(serviceURL);
			
			oController.getView().setModel(oModel);
			
			oController.getView().bindElement("/ProductSet('"+productId+"')");
			
			
		/*	oModel.read("/ProductSet('"+productId+"')", {
				success : function(data){
					//data is javascript object
					var oModel = new sap.ui.model.json.JSONModel();					
					oModel.setData(data);					
					//set the model to view
					oController.getView().setModel(oModel);},
				error : function(){}
			}*/
			//);
			
			
		});

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.ProductDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.ProductDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.ProductDetails
*/
//	onExit: function() {
//
//	}

});