//create a sub class of sap.ui.core.UIComponent
sap.ui.core.UIComponent.extend("smax.ui.empReg.Component", {
	
	createContent : function(){		
		return new sap.m.Button({ text : "Go"});		
	}
});


