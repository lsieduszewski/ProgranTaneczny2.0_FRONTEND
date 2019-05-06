(function() {
    "use strict";

    var module = angular.module("app");

    module.component("frontApp", {
        templateUrl: "/app/front-app.component.html",
        $routeConfig: [

            { path: "/", component:"aboutme", name: "Aboutme" },
            { path: "/centralDB", component:"frontApp.centralDB", name: "CentralDB" },
            { path: "/tournament", component:"frontApp.tournament", name: "Tournament" },

//            { path: "/**", redirectTo: ["Aboutme", ""] }
        ]
    });


}());
