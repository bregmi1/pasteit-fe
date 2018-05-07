import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthenticationResponse } from './authentication-response';
import { Router } from '@angular/router';
 
@Injectable()
export class AuthenticationService {
    private authUrl = 'http://localhost:8080/auth';
    private homeURL = 'http://localhost:8080/pastes';
    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private http: HttpClient;
    private authenticationResponse: AuthenticationResponse;
    private router: Router;
    private error: HttpErrorResponse;
    private logger = new BehaviorSubject<boolean>(this.hasToken());
 
    constructor(http: HttpClient, router: Router) {
        this.http = http;
        this.router = router;
    }
 
    public authenticate(email: string, password: string): Observable<AuthenticationResponse> {
        console.log(JSON.stringify({email: email, password: password}));
        return this.http.post<AuthenticationResponse>(
            this.authUrl, 
            JSON.stringify({email: email, password: password}), 
            {headers: this.headers}
        );
    }


    public login(email: string, password: string){
        this.authenticate(email, password).subscribe(
            authenticationResponse => {
                this.authenticationResponse = authenticationResponse;
                localStorage.setItem('currentUser', JSON.stringify(
                    {userId: this.authenticationResponse.userId,token: this.authenticationResponse.token}
                ));
                this.logger.next(true);
                this.router.navigate(['pastes'])
            }, 
            error => this.error = error
        );
    }

    isLoggedIn(): Observable<boolean>{
        return this.logger.asObservable();
    }
 
    getToken(): String {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser && currentUser.token;
      return token;
    }

    hasToken(): boolean{
        return this.getToken() ? true : false;
    }

    getCurrentUserId(): number{
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var userId = currentUser && currentUser.userId;
        return userId;
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.logger.next(false);
        this.router.navigate(['login']);
    }


}