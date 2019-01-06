function SpeakerService($http) {
    'ngInject';

    // const apiUrl = '/assets/speaker.json';
    const apiUrl = 'https://sessionize.com/api/v2/mqm7pgek/view/speakers';

    this.getSpeakers = () => {
        return $http.get(apiUrl).then(response => {
            return response.data;
        });
    }
}


export default SpeakerService;