(function() {
    "use strict";

    var module = angular.module("app");

    module.component("frontApp.tournament", {
        templateUrl: "/app/tournament.component.html",
        $routeConfig: [
            { path: "/tournamentJudgeList", component:"tournamentJudgeList", name: "TournamentJudgeList" },
            { path: "/createTournamentJudge", component:"createTournamentJudge", name: "CreateTournamentJudge" },
            { path: "/tournamentCoupleList", component:"tournamentCoupleList", name: "TournamentCoupleList" },
            { path: "/createTournamentCouple", component:"createTournamentCouple", name: "CreateTournamentCouple" },
            { path: "/tournamentRound", component:"tournamentRound", name: "TournamentRound" },
            { path: "/tournamentResult", component:"tournamentResultList", name: "TournamentResultList" },
//            { path: "/createClub", component:"createClub", name: "CreateClub" },
//            { path: "/judgeList", component:"judgeList", name: "JudgeList" },
//            { path: "/createJudge", component:"createJudge", name: "CreateJudge" },
//            { path: "/about", component:"about", name: "About" },
//            { path: "./**", redirectTo: ["DancerList", ""] }
        ]
    });


}());
