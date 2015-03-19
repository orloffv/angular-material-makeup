'use strict';

app
    .controller('PrivateCtrl', function() {})
    .controller('PublicCtrl', function() {})
    .controller('QuestionCtrl', function() {})
    .controller('WelcomeCtrl', function() {})
    .controller('ThanksCtrl', function() {})
    .controller('PauseCtrl', function() {})
    .controller('PageCtrl', function() {})
    .controller('IndexCtrl', function($scope, $state) {
        $scope.allRoutes = $state.get();
    })
