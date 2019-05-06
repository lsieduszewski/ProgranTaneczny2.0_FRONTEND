(function () {
    "use strict";

    angular.module("app.centralDB")
        .factory("dancerService", dancerService);

    dancerService.$inject = ["commonService"];
    function dancerService(commonService) {

        var URL = "http://localhost:8080/dancers/";
        var URL2 = "http://localhost:8080/couples/";
        var URL3 = "http://localhost:8080/clubs/";
        var URL4 = "http://localhost:8080/judges/";

        return {
            getdancers: getdancers,
            createDancer: createDancer,
            createCouple: createCouple,
            getcouples: getcouples,
            getclubs: getclubs,
            createClub: createClub,
            getjudges: getjudges,
            createJudge: createJudge,
        };

        function getdancers() {
            var url = URL + "findAll";
            var errorMsg = "blad przy get dancers";
            var successMsg = "sukces przy get dancers";
            return commonService.get(url, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }

        function createDancer(dancer) {
            var url = URL + "addDancer";
            var errorMsg = "blad przy addDancer";
            var successMsg = "sukces przy addDancer";
            return commonService.post(url, dancer, successMsg, errorMsg).then(function (result) {
                return result ? result : [];
            });
        }

        function createCouple(couple) {
                    var url = URL2 + "addCouple";
                    var errorMsg = "blad przy addCouple";
                    var successMsg = "sukces przy addCouple";
                    return commonService.post(url, couple, successMsg, errorMsg).then(function (result) {
                        return result ? result : [];
                    });
                }

        function getcouples() {
                    var url = URL2 + "findAll";
                    var errorMsg = "blad przy get couples";
                    var successMsg = "sukces przy get couples";
                    return commonService.get(url, successMsg, errorMsg).then(function (result) {
                        return result ? result : [];
                    });
                }

        function getclubs() {
                            var url = URL3 + "findAll";
                            var errorMsg = "blad przy get clubs";
                            var successMsg = "sukces przy get clubs";
                            return commonService.get(url, successMsg, errorMsg).then(function (result) {
                                return result ? result : [];
                            });
                        }

         function createClub(club) {
                            var url = URL3 + "addClub";
                            var errorMsg = "blad przy addClub";
                            var successMsg = "sukces przy addClub";
                            return commonService.post(url, club, successMsg, errorMsg).then(function (result) {
                                return result ? result : [];
                            });
                        }

                function getjudges() {
                                    var url = URL4 + "findAll";
                                    var errorMsg = "blad przy get judges";
                                    var successMsg = "sukces przy get judges";
                                    return commonService.get(url, successMsg, errorMsg).then(function (result) {
                                        return result ? result : [];
                                    });
                                }

                 function createJudge(judge) {
                                    var url = URL4 + "addJudge";
                                    var errorMsg = "blad przy addJudge";
                                    var successMsg = "sukces przy addJudge";
                                    return commonService.post(url, judge, successMsg, errorMsg).then(function (result) {
                                        return result ? result : [];
                                    });
                                }


//
//        function getBookDetails(id) {
//            var url = URL + "getBookDetails/" + id;
//            var errorMsg = "blad przy get bookDetails";
//            var successMsg = "sukces przy get bookDetails";
//            return commonService.get(url, id,  successMsg, errorMsg).then(function (result) {
//                 return result ? result : [];
//                    });
//                }
    }
})();
