import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable()
export class SessionService {

    // private readonly apiUrl = '/assets/session.json';
    private readonly apiUrl = 'https://sessionize.com/api/v2/mqm7pgek/view/sessions';

    constructor(private http: HttpClient) {}

    getSessions(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl).pipe(
            map(response => response[0].sessions)
        );
    }
}
