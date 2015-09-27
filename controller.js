angular.module("app", ["chart.js"]).controller("hello", Hello);

function Hello($scope, $http) {
        // $http.get('http://rest-service.guides.spring.io/greeting').
        // success(function(data) {
        //    $scope.greeting = data;
        // });
        $scope.greeting = {
            "labels" : ["1", "2", "3", "4", "5"],
            "series" : ["Series 1", "Series 2"],
            "data" : [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ],
            "colors" : [ "#97BBCD", "#DCDCDC", "#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360" ]

        }
}
