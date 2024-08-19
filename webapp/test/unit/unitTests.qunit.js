/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comkposm/edd_application/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
