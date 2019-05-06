(function() {
    "use strict";

    var module = angular.module("app");

    module.component("frontApp.centralDB", {
        templateUrl: "/app/centralDB.component.html",
        $routeConfig: [
            { path: "/list", component:"dancerList", name: "DancerList" },
            { path: "/createDancer", component:"createDancer", name: "CreateDancer" },
            { path: "/coupleList", component:"coupleList", name: "CoupleList" },
            { path: "/createCouple", component:"createCouple", name: "CreateCouple" },
            { path: "/clubList", component:"clubList", name: "ClubList" },
            { path: "/createClub", component:"createClub", name: "CreateClub" },
            { path: "/judgeList", component:"judgeList", name: "JudgeList" },
            { path: "/createJudge", component:"createJudge", name: "CreateJudge" },
            { path: "/about", component:"about", name: "About" },
            { path: "./**", redirectTo: ["DancerList", ""] }
        ]
    });

    module.component("about", {
       template: "Program stworzony przez Lukasza Sieduszewskiego </br> e-mail: lsieduszewski@gmail.com, tel. 000 000 000"
    });

}());
