(function() {
    "use strict";

    var module = angular.module("app.centralDB");

    function fetchCouples(dancerService) {
        return dancerService.getclubs();
    }

    function controller(dancerService) {

        var model = this;
        model.clubs = [];

        model.$onInit = function() {
            fetchCouples(dancerService).then(function(clubs) {
                model.clubs = clubs;
            });
        };
    }

    module.component("clubList", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/centralDB/club-list.component.html",
        controllerAs: "model",
        controller: ["dancerService", controller]
    });

} ());
