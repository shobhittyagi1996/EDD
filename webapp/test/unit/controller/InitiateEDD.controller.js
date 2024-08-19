/*global QUnit*/

sap.ui.define([
	"comkposm/edd_application/controller/InitiateEDD.controller"
], function (Controller) {
	"use strict";

	QUnit.module("InitiateEDD Controller");

	QUnit.test("I should test the InitiateEDD controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
