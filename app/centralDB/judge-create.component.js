(function() {
    "use strict";

    var module = angular.module("app.centralDB");

    function createNewJudge(dancerService, judgeToCreate) {
            return dancerService.createJudge(judgeToCreate);
        }


    function controller(dancerService) {

        var model = this;
        model.newJudge = {
            surname: "",
            name: "",
            city: "",
            country: ""
        };

        model.$onInit = function() {
        };

        model.addJudge = function() {
            createNewJudge(dancerService,model.newJudge).then(function(result) {
                model.$router.navigate(["JudgeList"]);
            });
        };


    }

     module.component("createJudge", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/centralDB/judge-create.component.html",
        controllerAs: "model",
        controller: ["dancerService", controller]
    });

} ());
