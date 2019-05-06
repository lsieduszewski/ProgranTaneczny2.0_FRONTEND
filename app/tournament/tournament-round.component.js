(function() {
    "use strict";

    var module = angular.module("app.tournament");

    function fetchJudges(tournamentService) {
        return tournamentService.getjudges();
    }

    function fetchTCouples(tournamentService) {  //only active
            return tournamentService.getInTournamentCouples();
        }

    function createNewJudgeRate(tournamentService, rate) {
             return tournamentService.addRate(rate);
    }


    function controller(tournamentService) {

        var model = this;
        model.judges = [];
        model.couples = [];

        model.newRate = {
            dance: "",
            judgeId: "",
            judgesRating: ""
        };

        model.$onInit = function() {
            fetchJudges(tournamentService).then(function(judges) {
                model.judges = judges;
            });
            fetchTCouples(tournamentService).then(function(couples) {
                            model.couples = couples;

            if (model.couples.length < 7) {
                model.newRate.round = "FINAL";
            } else if (model.couples.length < 14 && model.couples.length > 6) {
                model.newRate.round = "1/2 FINAL";
                } else {
                model.newRate.round = "1/4 FINAL";
                }
                        });

        };

        model.addJudgeRate = function() {

        var temp = model.newRate.judgeId.split(":");
        model.newRate.judgeId = temp[temp.length-1];

        createNewJudgeRate(tournamentService,model.newRate).then(function(result) {
              model.$router.navigate(["TournamentRound"]);
              });

              console.log(model.newRate);
        }

    }

    module.component("tournamentRound", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/tournament/tournament-round.component.html",
        controllerAs: "model",
        controller: ["tournamentService", controller]
    });

} ());
