sap.ui.define([
  "T1D/DiabeticWellbeing/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
  "use strict";

  return Controller.extend("T1D.DiabeticWellbeing.controller.DiabeticProfile", {

    onInit: function(){
      this.getView().addStyleClass("sapUISizeCompact");
      this.getView().byId("idProfEdit").setEnabled(false);
      this.getView().byId("idProfSave").setEnabled(false);
      this.getView().byId("idProfReset").setEnabled(false);
    },

    onClick: function(){
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("GlucoseLevel");
    },

    onEditPress: function(){
      this.getView().byId("idDiabeticProfTable").setVisible(false);
      this.getView().byId("idSimpleForm").setVisible(true);
      this.getView().byId("idProfEdit").setEnabled(false);
      this.getView().byId("idProfSave").setEnabled(true);
      this.getView().byId("idProfReset").setEnabled(true);
    },

    OnSelectionChange: function(oEvent){
      var json = new JSONModel();
      var selectedData = oEvent.getSource().getSelectedItem().getBindingContext().getObject();
      json.setData(selectedData);
      this.getView().setModel(json,"DiabeticProfile");
      this.getView().byId("idProfEdit").setEnabled(true);

     },

    onSavePress: function(oEvent){
      var formData = this.getView().getModel("DiabeticProfile").getData();
      //this.getOwnerComponent().getModel().
/*
        var fnSuccess = function () {
				this._setBusy(false);
				MessageToast.show(this._getText("changesSentMessage"));
				this._setUIChanges(false);
			}.bind(this);

			var fnError = function (oError) {
				this._setBusy(false);
				this._setUIChanges(false);
				MessageBox.error(oError.message);
			}.bind(this);

			this._setBusy(true); // Lock UI until submitBatch is resolved.
			this.getView().getModel().submitBatch("peopleGroup").then(fnSuccess, fnError);
			this._bTechnicalErrors = false; // If there were technical errors, a new save resets them.
*/
      this.getView().byId("idDiabeticProfTable").setVisible(true);
      this.getView().byId("idSimpleForm").setVisible(false);
      this.getView().byId("idProfEdit").setEnabled(false);
      this.getView().byId("idProfSave").setEnabled(false);
      this.getView().byId("idProfReset").setEnabled(false);
      this.getView().byId("idDiabeticProfTable").removeSelections(true);
    },

    onResetPress: function(oEvent){
      var json = new JSONModel();
      var selectedData = oEvent.getSource().getSelectedItem().getBindingContext().getObject();
      json.setData(selectedData);
      this.getView().byId("idDiabeticProfTable").removeSelections(true);
    }

  });
});
