(function() {
    "use strict";

    var module = angular.module("app", ["ngComponentRouter", "ngAnimate", "app.common", "app.centralDB", "app.tournament"]);
    module.value("$routerRootComponent", "frontApp");

}());
