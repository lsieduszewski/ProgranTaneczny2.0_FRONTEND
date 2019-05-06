(function() {
    "use strict";

    var module = angular.module("app.tournament");

    function fetchCouplesResult(tournamentService) {
        return tournamentService.getCouplesResult();
    }

    function fetchTCouples(tournamentService) {
            return tournamentService.getInTournamentCouples();
    }

    function findRoundRate(tournamentService, roundRate) {
             return tournamentService.findRoundRate(roundRate);
    }

    function addJudgeRate(tournamentService, roundRate) {
                 return tournamentService.addRoundPoints(roundRate);
        }




    function controller(tournamentService) {

        var model = this;
        model.couples = [];
        model.tCouples = [];
        model.round = {
        round: "",
        };
        model.rate = [];

        model.$onInit = function() {
            fetchCouplesResult(tournamentService).then(function(couples) {
                model.couples = couples;
            });
            fetchTCouples(tournamentService).then(function(tCouples) {
                model.tCouples = tCouples;
            if (model.tCouples.length < 7) {
                model.round.round = "FINAL";
                } else if (model.tCouples.length < 14 && model.tCouples.length > 6) {
                model.round.round = "1/2 FINAL";
                } else {
                model.round.round = "1/4 FINAL";
                }

            });


        };

            model.addJudgeRate = function() {

             findRoundRate(tournamentService,model.round).then(function(rate) {
                             model.rate = rate;
                             });
             addJudgeRate(tournamentService,model.rate).then(function(result) {
                         model.$router.navigate(["TournamentRound"]);
                                      });



        }








    }

    module.component("tournamentResultList", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/tournament/t-couple-result.component.html",
        controllerAs: "model",
        controller: ["tournamentService", controller]
    });

} ());
