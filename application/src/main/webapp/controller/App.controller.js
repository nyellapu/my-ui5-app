sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller,MessageToast) {
	"use strict";

    return Controller.extend("mckesson.eu.my-ui5-app.controller.App", {

		onShowHello : function () {
			MessageToast.show("Hello openSAP");
		}
	});


});