import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';


@Injectable()
export class UserService{
    private url: string = 'http://localhost:8080/api/v1/user';
    private http: HttpClient;

    constructor(http: HttpClient){
        this.http = http;
    }
    
    getUserById(userId: number): Observable<User>{
        return this.http.get<User>(`${this.url}/${userId}`);
    }

}