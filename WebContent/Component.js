//create a sub class of sap.ui.core.UIComponent
sap.ui.core.UIComponent.extend("smax.ui.empReg.Component", {
	
	metadata : {
		rootView : "smax.ui.empReg.view.App",
		routing : {
			 config : {
				 routerClass : "sap.m.routing.Router"
			 },
			 routes : [
				 {
					 pattern : "abc",
					 name : "firstView",
					 viewName : "smax.ui.empReg.view.InitialPage",
					 viewType : "XML",
					 controlAggregation : "pages",
					 controlId : "idApp",
					
					 
				 }
			 ]
		 }
	},
	init : function(){
		sap.ui.core.UIComponent.prototype.init.apply(this);
		this.getRouter().initialize();
	}
	
});


