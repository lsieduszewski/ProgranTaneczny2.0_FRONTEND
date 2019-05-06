(function() {
    "use strict";

    var module = angular.module("app.tournament");

    function fetchJudges(tournamentService) {
        return tournamentService.getJudges();
    }

    function controller(tournamentService) {

        var model = this;
        model.judges = [];

        model.$onInit = function() {
            fetchJudges(tournamentService).then(function(judges) {
                model.judges = judges;
            });
        };
    }

    module.component("tournamentJudgeList", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/tournament/judge-list.component.html",
        controllerAs: "model",
        controller: ["tournamentService", controller]
    });

} ());
