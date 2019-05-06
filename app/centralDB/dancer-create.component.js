(function() {
    "use strict";

    var module = angular.module("app.centralDB");

    function createNewDancer(dancerService, dancerToCreate) {
            return dancerService.createDancer(dancerToCreate);
        }


    function controller(dancerService) {

        var model = this;
        model.newDancer = {
            male: false,
            surname: "",
            name: ""
        };

        model.$onInit = function() {
        };

        model.addDancer = function() {
            createNewDancer(dancerService,model.newDancer).then(function(result) {
                model.$router.navigate(["DancerList"]);
            });
        };


    }

     module.component("createDancer", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/centralDB/dancer-create.component.html",
        controllerAs: "model",
        controller: ["dancerService", controller]
    });

} ());
