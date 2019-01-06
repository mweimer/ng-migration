import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class SpeakerService {

    //private readonly apiUrl = '/assets/speaker.json';
    private readonly apiUrl = 'https://sessionize.com/api/v2/mqm7pgek/view/speakers';

    constructor(private http: HttpClient) {}

    getSpeakers(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
