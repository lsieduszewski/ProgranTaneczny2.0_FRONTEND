(function() {
    "use strict";

    var module = angular.module("app.tournament");

         function fetchJudges(tournamentService) {
                    return tournamentService.getjudges();
                }


                function createNewTournamentJudge(tournamentService, judgeToCreate) {
                            return tournamentService.addTournamentJudge(judgeToCreate);
                        }

                function controller(tournamentService) {

                    var model = this;
                    model.judges = [];

                    model.$onInit = function() {
                        fetchJudges(tournamentService).then(function(judges) {
                            model.judges = judges;
                        });

                    };

                         model.newTournamentJudge = {
                         id: "",
                         tournamentId: ""
                         }

            model.addTournamentJudge = function() {

                  var temp = model.newTournamentJudge.id.split(":");
                  model.newTournamentJudge.id = temp[temp.length-1];



                  createNewTournamentJudge(tournamentService,model.newTournamentJudge).then(function(result) {
                        model.$router.navigate(["TournamentJudgeList"]);
                       });

                      console.log(model.newTournamentJudge);
                      }


                }


              module.component("createTournamentJudge", {
                 bindings: {
                     "$router": "<"
                 },
                 templateUrl: "/app/tournament/t-judge-create.component.html",
                 controllerAs: "model",
                 controller: ["tournamentService", controller]
             });

         } ());