/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "T1D/DiabeticWellbeing/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});
