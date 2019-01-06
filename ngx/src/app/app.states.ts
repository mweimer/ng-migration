import {SessionsPageComponent} from './session/sessions-page/sessions-page.component';
import {HomePageComponent} from './home/home-page/home-page.component';
import {SpeakersPageComponent} from './speaker/speakers-page/speakers-page.component';

const homeState = {
    name: 'home',
    url: '/',
    views: {
        'content': {
            component: HomePageComponent
        }
    }

};

const sessionState = {
    name: 'session',
    url: '/sessions',
    views: {
        'content': {
            component: SessionsPageComponent
        }
    }
};

const speakerState = {
    name: 'speaker',
    url: '/speakers',
    views: {
        'content': {
            component: SpeakersPageComponent
        }
    }
};

export const states = [homeState, sessionState, speakerState];
