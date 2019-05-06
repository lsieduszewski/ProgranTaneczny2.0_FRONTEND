(function() {
    "use strict";

    var module = angular.module("app.centralDB");

    function fetchCouples(dancerService) {
        return dancerService.getcouples();
    }

    function controller(dancerService) {

        var model = this;
        model.couples = [];

        model.$onInit = function() {
            fetchCouples(dancerService).then(function(couples) {
                model.couples = couples;
            });
        };
    }

    module.component("coupleList", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/centralDB/couple-list.component.html",
        controllerAs: "model",
        controller: ["dancerService", controller]
    });

} ());
