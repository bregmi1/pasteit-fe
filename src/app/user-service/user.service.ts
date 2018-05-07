import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import { AuthenticationService } from '../authentication-service/authentication.service';


@Injectable()
export class UserService{
    private url: string = 'http://localhost:8080/api/v1/user';

    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
        });

    constructor(private http: HttpClient, private authenticationService: AuthenticationService){
    }

    getUser(): Observable<User>{
        return this.http.get<User>(`${this.url}`, {headers: this.headers});
    }
    
    createUser(user: User): Observable<User>{
        return this.http.post<User>(`${this.url}/`, user);
    }


    updateUser(userId: number, user: User): Observable<User>{
        return this.http.put<User>(`${this.url}/${userId}`, user, {headers: this.headers});
    }

}