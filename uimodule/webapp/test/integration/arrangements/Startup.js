sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("T1D.DiabeticWellbeing.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "T1D.DiabeticWellbeing",
          async: true,
          manifest: true
        }
      });
    }

  });
});
