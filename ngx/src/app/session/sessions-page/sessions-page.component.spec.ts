

describe('Session Page Component', () => {
    let element, $scope, controller, $httpBackend;

    const mockResponse = [
        {
            sessions: [{ startsAt: '2019-01-08T08:00:00', title: 'Mock Session'}]
        }
    ];

    beforeEach(angular.mock.module('migrate-demo', function ($provide) {
        $provide.value('facetModel', {});
    }));


    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;

        $httpBackend.whenGET('https://sessionize.com/api/v2/mqm7pgek/view/sessions').respond(200, mockResponse);
    }));

    beforeEach(inject(function($rootScope, $compile) {
        $scope = $rootScope.$new();
        element = angular.element('<md-sessions-page></md-sessions-page>');
        $compile(element)($scope);
        controller = element.controller('mdSessionsPage');
    }));


    it('should retrieve sessions', () => {
        $httpBackend.flush();
        $scope.$digest();


        expect(controller.sessions.length).toEqual(1);
    });
});
