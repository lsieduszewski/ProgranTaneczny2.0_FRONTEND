(function () {
    "use strict";

    angular.module("app.tournament")
        .factory("tournamentService", tournamentService);

    tournamentService.$inject = ["commonService"];
    function tournamentService(commonService) {

        var URL = "http://localhost:8080/tournamentJudges/";
        var URL2 = "http://localhost:8080/tournamentCouples/";
        var URL3 = "http://localhost:8080/tournamentJudgeRating/";

        var URL4 = "http://localhost:8080/judges/";
        var URL5 = "http://localhost:8080/couples/";

        return {
            getJudges: getJudges,
            getjudges: getjudges,
            addTournamentJudge : addTournamentJudge,
            getCouples: getCouples,
            getcouples: getcouples,
            addTournamentCouple: addTournamentCouple,
            getInTournamentCouples:getInTournamentCouples,
            addRate:addRate,
            getCouplesResult:getCouplesResult,
            findRoundRate:findRoundRate,
            addRoundPoints:addRoundPoints,
        };

        function getJudges() {
            var url = URL + "findAll";
            var errorMsg = "blad przy getJudges";
            var successMsg = "sukces przy getJudges";
            return commonService.get(url, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }

        function getjudges() {   //sędziowie z centralDB
             var url = URL4 + "findAll";
             var errorMsg = "blad przy get judges";
             var successMsg = "sukces przy get judges";
             return commonService.get(url, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
             });
        }

        function addTournamentJudge(judge) {
            var url = URL + "addJudge";
            var errorMsg = "blad przy addTJudge";
            var successMsg = "sukces przy addTJudge";
            return commonService.post(url, judge, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }

        function getCouples() {
            var url = URL2 + "findAll";
            var errorMsg = "blad przy getCouples";
            var successMsg = "sukces przy getCouples";
            return commonService.get(url, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }

               function getcouples() {   //pary z centralDB
                     var url = URL5 + "findAll";
                     var errorMsg = "blad przy get couples";
                     var successMsg = "sukces przy get couples";
                     return commonService.get(url, successMsg, errorMsg).then(function (result) {
                        return result ? result : [];
                     });
                }

        function addTournamentCouple(couple) {
            var url = URL2 + "addTournamentCouple";
            var errorMsg = "blad przy addTCouple";
            var successMsg = "sukces przy addTCouple";
            return commonService.post(url, couple, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }

                function getInTournamentCouples() {
                    var url = URL2 + "findAllInTournament";
                    var errorMsg = "blad przy getInTournamentCouples";
                    var successMsg = "sukces przy getInTournamentCouples";
                    return commonService.get(url, successMsg, errorMsg).then(function (result) {
                        return result ? result : [];
                    });
                }
        function addRate(rate) {
                    var url = URL3 + "addRate";
                    var errorMsg = "blad przy addRate";
                    var successMsg = "sukces przy addRate";
                    return commonService.post(url, rate, successMsg, errorMsg).then(function (result) {
                        return result ? result : [];
                    });
                }

                function getCouplesResult() {
                    var url = URL2 + "findCoupleResult";
                    var errorMsg = "blad przy findCoupleResult";
                    var successMsg = "sukces przy findCoupleResult";
                    return commonService.get(url, successMsg, errorMsg).then(function (result) {
                        return result ? result : [];
                    });
                }

                 function findRoundRate(round) {
                             var url = URL3 + "findRoundRate";
                             var errorMsg = "blad przy findRoundRate";
                             var successMsg = "sukces przy findRoundRate";
                             return commonService.post(url, round, successMsg, errorMsg).then(function (result) {
                                 return result ? result : [];
                             });
                         }


                 function addRoundPoints(rate) {
                             var url = URL2 + "addRoundPoints";
                             var errorMsg = "blad przy addRoundPoints";
                             var successMsg = "sukces przy addRoundPoints";
                             return commonService.post(url, rate, successMsg, errorMsg).then(function (result) {
                                 return result ? result : [];
                             });
                         }

      }
})();
