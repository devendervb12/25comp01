//create a sub class of sap.ui.core.UIComponent
sap.ui.core.UIComponent.extend("smax.ui.empReg.Component", {
	
	metadata : {
		rootView : "smax.ui.empReg.view.App",
		routing : {
			 config : {
				 routerClass : "sap.m.routing.Router",
				 viewType : "XML",
				 controlId : "idApp",
				 controlAggregation : "pages"
			 },
			 routes : [
				 {
					 pattern : "",// when
					 name : "firstView",
					 viewName : "smax.ui.empReg.view.InitialPage"
									 
				 },
				 {
					 pattern : "prodDtl/{pid}",
					 name : "nameProdDtl",
					 viewName : "smax.ui.empReg.view.ProductDetails"
					
				 }
			 ]
		 }
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}
	
});


