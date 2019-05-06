(function() {
    "use strict";

    var module = angular.module("app.centralDB");

    function fetchBooks(dancerService) {
        return dancerService.getdancers();
    }

    function controller(dancerService) {

        var model = this;
        model.dancers = [];

        model.$onInit = function() {
            fetchBooks(dancerService).then(function(dancers) {
                model.dancers = dancers;
            });
        };
    }

    module.component("dancerList", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/centralDB/dancer-list.component.html",
        controllerAs: "model",
        controller: ["dancerService", controller]
    });

} ());
