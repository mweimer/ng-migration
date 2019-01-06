function SessionService($http) {
    'ngInject';

    // const apiUrl = '/assets/session.json';
    const apiUrl = 'https://sessionize.com/api/v2/mqm7pgek/view/sessions';

    this.getSessions = () => {
        return $http.get(apiUrl).then(response => {
            return response.data[0].sessions;
        });
    }
}


export default SessionService;