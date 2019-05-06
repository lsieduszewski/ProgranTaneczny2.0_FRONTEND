(function() {
    "use strict";

    var module = angular.module("app.centralDB");

    function fetchJudges(dancerService) {
        return dancerService.getjudges();
    }

    function controller(dancerService) {

        var model = this;
        model.judges = [];

        model.$onInit = function() {
            fetchJudges(dancerService).then(function(judges) {
                model.judges = judges;
            });
        };
    }

    module.component("judgeList", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/centralDB/judge-list.component.html",
        controllerAs: "model",
        controller: ["dancerService", controller]
    });

} ());
