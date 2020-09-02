sap.ui.define([
  "T1D/DiabeticWellbeing/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("T1D.DiabeticWellbeing.controller.GlucoseLevelDetails", {

    onInit: function(){
      this.getView().addStyleClass("sapUISizeCompact");
    },

    onClick1: function(){
        var oRouter1 = this.getOwnerComponent().getRouter();
        oRouter1.navTo("RouteApp");
    }

  });
});
