angular.module("app", ["chart.js"]).controller("hello", Hello);

function Hello($scope, $http) {
        // $http.get('http://rest-service.guides.spring.io/greeting').
        // success(function(data) {
        //    $scope.greeting = data;
        // });

        $scope.disktop = {
            "labels" : ["mysqld", "sleep", "gitlab-unicorn-", "stapio"],
            "series" : ["Read", "Write"],
            "data" : [
                [15843328, 1224, 788, 0],
                [5071360, 0, 0, 562]
            ]

        }

        $scope.iosize = {

        }

        $scope.iops = {
            "labels" : ["mysqld", "postmark", "top", "postgress", "pgrep", "redis-server", "ceph-mds",
                        "sshd", "gitlab-unicorn-", "irqbalance", "ruby", "crond", "awk", "docker", "ksmtuned",
                        "python", "java", "tpcc_start", "tmux"],
            "series" : ["read", "write"],
            "data" : [
                [10456, 37821, 14636, 153, 1048, 990, 144, 68, 172, 336, 98, 84, 10, 24, 85, 42, 12, 6, 0, 18],
                [197, 54081, 55, 30, 0, 133, 0, 67, 0, 0, 2, 157, 0, 4, 0, 2, 0, 0, 9, 0]
            ]
        }
}
