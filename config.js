(function(){
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider, $locationProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/user/login.view.client.html"
                //controller: "LoginController",
                //controllerAs: "model"
            })

            .when("/register", {
                templateUrl: "views/user/register.view.client.html"
        })
            .when("/user/:uid", {
                templateUrl: "views/user/profile.view.client.html"
            });
       // $locationProvider.html5Mode(true);
    }
})();