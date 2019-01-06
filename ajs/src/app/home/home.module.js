import HomePageComponent from './home-page/home-page.component';

const homeModule = angular.module('migrate-demo.home', [])
    .component('mdHomePage', HomePageComponent);


export default homeModule;

