(function () {
    "use strict";

    // getter form - gets the contacts app
    angular.module("Contacts").
        config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                    when('/contacts', {
                        templateUrl: 'templates/contacts-list.html',
                        controller: 'ContactsListController'
                    }).
                    when('/add-contact', {
                        templateUrl: 'templates/add-contact.html',
                        controller: 'AddContactController'
                    }).
                    when('/contacts/:id', {
                        templateUrl: 'templates/edit-contact.html',
                        controller: 'EditContactController'
                    }).
                    when('/about', {
                        templateUrl: 'templates/about.html'
                    }).
                    otherwise({
                        redirectTo: '/about'
                    });
            }]);
}());