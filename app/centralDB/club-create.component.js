(function() {
    "use strict";

    var module = angular.module("app.centralDB");

    function createNewClub(dancerService, clubToCreate) {
            return dancerService.createClub(clubToCreate);
        }


    function controller(dancerService) {

        var model = this;
        model.newClub = {
            name: "",
            city: "",
            country: ""
        };

        model.$onInit = function() {
        };

        model.addClub = function() {
            createNewClub(dancerService,model.newClub).then(function(result) {
                model.$router.navigate(["ClubList"]);
            });
        };


    }

     module.component("createClub", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/centralDB/club-create.component.html",
        controllerAs: "model",
        controller: ["dancerService", controller]
    });

} ());
