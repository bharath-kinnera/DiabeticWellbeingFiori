sap.ui.define([
  "T1D/DiabeticWellbeing/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
  "use strict";

  return Controller.extend("T1D.DiabeticWellbeing.controller.DiabeticProfile", {

    onInit: function(){
      this.getView().addStyleClass("sapUISizeCompact");
    },

    onClick: function(){
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("GlucoseLevel");
    },

    onEditPress: function(){
      this.getView().byId("idSimpleForm").setVisible(true);
    },

    OnSelectionChange: function(oEvent){
      var json = new JSONModel();
      var selectedData = oEvent.getSource().getSelectedItem().getBindingContext().getObject();
      json.setData(selectedData);
      this.getView().setModel(json,"DiabeticProfile");
      debugger;
    },

    onSavePress: function(oEvent){
      var formData = this.getView().getModel("DiabeticProfile").getData();
      //this.getOwnerComponent().getModel().
      this.getView().byId("idSimpleForm").setVisible(false);
    }

  });
});
