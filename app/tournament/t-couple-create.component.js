(function() {
    "use strict";

    var module = angular.module("app.tournament");

         function fetchCouples(tournamentService) {
                    return tournamentService.getcouples();
                }


                function createNewTournamentCouple(tournamentService, coupleToCreate) {
                            return tournamentService.addTournamentCouple(coupleToCreate);
                        }

                function controller(tournamentService) {

                    var model = this;
                    model.couples = [];

                    model.$onInit = function() {
                        fetchCouples(tournamentService).then(function(couples) {
                            model.couples = couples;
                        });

                    };

                         model.newTournamentCouple = {
                         id: "",
                         startNumber: ""
                         }

            model.addTournamentCouple = function() {

                  var temp = model.newTournamentCouple.id.split(":");
                  model.newTournamentCouple.id = temp[temp.length-1];

                  createNewTournamentCouple(tournamentService,model.newTournamentCouple).then(function(result) {
                        model.$router.navigate(["TournamentCoupleList"]);
                       });

                      console.log(model.newTournamentCouple);
                      }


                }


              module.component("createTournamentCouple", {
                 bindings: {
                     "$router": "<"
                 },
                 templateUrl: "/app/tournament/t-couple-create.component.html",
                 controllerAs: "model",
                 controller: ["tournamentService", controller]
             });

         } ());