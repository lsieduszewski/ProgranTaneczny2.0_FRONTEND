(function() {
    "use strict";

    var module = angular.module("app.centralDB");

       function fetchBooks(dancerService) {
           return dancerService.getdancers();
       }

        function fetchClubs(dancerService) {
                  return dancerService.getclubs();
              }

       function createNewCouple(dancerService, coupleToCreate) {
                   return dancerService.createCouple(coupleToCreate);
               }

       function controller(dancerService) {

           var model = this;
           model.dancers = [];
           model.clubs = [];

           model.$onInit = function() {
               fetchBooks(dancerService).then(function(dancers) {
                   model.dancers = dancers;
               });
               fetchClubs(dancerService).then(function(clubs) {
                                  model.clubs = clubs;
                              });
           };

                model.newCouple = {
                male: "",
                female: "",
                club: ""
        };



           model.addCouple = function() {

                    var temp = model.newCouple.male.split(":");
                    model.newCouple.male = temp[temp.length-1];

                    temp = model.newCouple.female.split(":");
                    model.newCouple.female = temp[temp.length-1];

                    temp = model.newCouple.club.split(":");
                    model.newCouple.club = temp[temp.length-1];

                 createNewCouple(dancerService,model.newCouple).then(function(result) {
                                 model.$router.navigate(["CoupleList"]);
                             });

           console.log(model.newCouple);
           }




       }




     module.component("createCouple", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/centralDB/couple-create.component.html",
        controllerAs: "model",
        controller: ["dancerService", controller]
    });

} ());
