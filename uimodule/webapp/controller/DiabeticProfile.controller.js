sap.ui.define([
  "T1D/DiabeticWellbeing/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("T1D.DiabeticWellbeing.controller.DiabeticProfile", {

    onInit: function(){
      this.getView().addStyleClass("sapUISizeCompact");
    },

    onClick: function(){
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("GlucoseLevel");
    }

  });
});
