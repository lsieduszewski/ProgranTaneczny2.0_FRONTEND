

(function() {
    "use strict";

    var module = angular.module("app.centralDB");

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

     module.component("aboutme", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/about.component.html",
        controllerAs: "model",
        controller: ["dancerService", controller]
    });

} ());





