export default function(appModule) {
    appModule.config(function($stateProvider, $urlRouterProvider) {
        'ngInject';


        const homeState = {
            name: 'home',
            url: '/',
            views: {
                'content': {
                    component: 'mdHomePage'
                }
            }
            
        };

        const sessionState = {
            name: 'session',
            url: '/sessions',
            views: {
                'content': {
                    component: 'mdSessionsPage'
                }
            }
        };

        const speakerState = {
            name: 'speaker',
            url: '/speakers',
            views: {
                'content': {
                    component: 'mdSpeakersPage'
                }
            }
        };

      
        $stateProvider.state(homeState);
        $stateProvider.state(sessionState);
        $stateProvider.state(speakerState);


        $urlRouterProvider.otherwise('/');
    });
}
