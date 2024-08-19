sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.kpo.sm.eddapplication.controller.InitiateEDD", {
            onInit: function () {
                // Full JSON data
                var oData = {
                    questions: [
                        { "supplierid": "1", "questionKey": "question_1a" },

                        { "supplierid": "2", "questionKey": "question_2a" },
                        { "supplierid": "3", "questionKey": "question_2b" },
                        { "supplierid": "4", "questionKey": "question_2c" },
                        { "supplierid": "5", "questionKey": "question_2d" },
                        { "supplierid": "6", "questionKey": "question_2f" },

                        { "supplierid": "7", "questionKey": "question_3a" },

                        { "supplierid": "8", "questionKey": "question_4a" },
                        { "supplierid": "9", "questionKey": "question_5a" },

                        { "supplierid": "10", "questionKey": "question_6a" },

                        { "supplierid": "11", "questionKey": "question_6c" },

                        { "supplierid": "12", "questionKey": "question_7a" },

                        { "supplierid": "13", "questionKey": "question_8a" },
                        { "supplierid": "14", "questionKey": "question_9a" },

                        { "supplierid": "15", "questionKey": "question_10a" },

                        { "supplierid": "16", "questionKey": "question_11a" },
                        { "supplierid": "17", "questionKey": "question_12a" },

                        { "supplierid": "18", "questionKey": "question_13a" },

                        { "supplierid": "19", "questionKey": "question_14a" },

                        { "supplierid": "20", "questionKey": "question_15a" },

                        { "supplierid": "21", "questionKey": "question_16a" },
                        { "supplierid": "22", "questionKey": "question_16b" },
                        { "supplierid": "23", "questionKey": "question_16c" },
                        { "supplierid": "24", "questionKey": "question_16d" },

                        { "supplierid": "25", "questionKey": "question_17a" },

                    ],
                    tableVisible: false
                };

                // Create JSON model and set it to the view
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "myModel");
            },
            onPreviewEdd: function () {
                // Get the model
                var oModel = this.getView().getModel("myModel");
    
                // Toggle the visibility of the table
                var bVisible = oModel.getProperty("/tableVisible");
                oModel.setProperty("/tableVisible", !bVisible);
            },
            i18nFormatter: function (sKey) {
                var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                return oBundle.getText(sKey);
            },
            onSupplier: function(){
                this.getOwnerComponent().getRouter().navTo("RouteSupplierEDD");
            }
        });
    });
