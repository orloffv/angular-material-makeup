'use strict';

app
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state('public',
                {
                    abstract: true,
                    templateUrl: '/layouts/public.html',
                    controller: 'PublicCtrl'
                }
            )
            .state('public.index',
                {
                    url: '/',
                    templateUrl: '/views/index.html',
                    controller: 'IndexCtrl'
                }
            )
            .state('private',
                {
                    abstract: true,
                    templateUrl: '/layouts/private.html',
                    controller: 'PrivateCtrl'
                }
            )
            .state('private.welcome',
                {
                    url: '/welcome',
                    templateUrl: '/views/welcome.html',
                    controller: 'WelcomeCtrl'
                }
            )
            .state('private.question',
                {
                    url: '/question',
                    templateUrl: '/views/question.html',
                    controller: 'QuestionCtrl'
                }
            )
            .state('private.page',
                {
                    url: '/page',
                    templateUrl: '/views/page.html',
                    controller: 'PageCtrl'
                }
            )
            .state('private.thanks',
                {
                    url: '/thanks',
                    templateUrl: '/views/thanks.html',
                    controller: 'ThanksCtrl'
                }
            )
            .state('private.pause',
                {
                    url: '/pause',
                    templateUrl: '/views/pause.html',
                    controller: 'PauseCtrl'
                }
            )
            .state('public.404',
                {
                    title: 'Ошибка 404',
                    templateUrl: '/views/404.html'
                }
            )
            .state('public.otherwise',
                {
                    url: '*path',
                    title: 'Ошибка 404',
                    templateUrl: '/views/404.html'
                }
            )
        ;
    })
;
