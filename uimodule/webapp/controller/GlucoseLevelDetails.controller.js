sap.ui.define([
  "T1D/DiabeticWellbeing/controller/BaseController"
  //"sap.ui.core.util.Export",
  //"sap.ui.core.util.ExportTypeCSV"
], function(Controller) {
  "use strict";

  return Controller.extend("T1D.DiabeticWellbeing.controller.GlucoseLevelDetails", {

    onInit: function(){
      this.getView().addStyleClass("sapUISizeCompact");

    },

    onClick1: function(){
        var oRouter1 = this.getOwnerComponent().getRouter();
        oRouter1.navTo("RouteApp");
    },
/////

    onClickExport: sap.m.Table.prototype.exportData || function(oEvent) {
 /*     var oExport = new sap.ui.core.util.Export({
      exportType: new sap.ui.core.util.ExportTypeCSV({
      separatorChar: ";"
      }),

      models: this.getView().getModel(),
      rows: {
      path: "/GlucoseLevels"
      },

      columns: [
        {
          name: "ID",
          template: {
          content: "{GlucoseLevels>/ID}"
          }
        }
      ]

    });

    //* download exported file

    oExport.saveFile().always(function() {
    this.destroy();
    }); */
    }



/////
  });
});
