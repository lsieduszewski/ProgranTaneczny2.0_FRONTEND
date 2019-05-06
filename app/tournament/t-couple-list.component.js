(function() {
    "use strict";

    var module = angular.module("app.tournament");

    function fetchCouples(tournamentService) {
        return tournamentService.getCouples();
    }

    function controller(tournamentService) {

        var model = this;
        model.couples = [];

        model.$onInit = function() {
            fetchCouples(tournamentService).then(function(couples) {
                model.couples = couples;
            });
        };
    }

    module.component("tournamentCoupleList", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/tournament/t-couple-list.component.html",
        controllerAs: "model",
        controller: ["tournamentService", controller]
    });

} ());
