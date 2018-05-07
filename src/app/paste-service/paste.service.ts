import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Paste } from './paste';
import { AuthenticationService } from '../authentication-service/authentication.service';


@Injectable()
export class PasteService{
    private url: string = 'http://localhost:8080/api/v1/paste';
    private pastes: Paste[];

    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
        });

    constructor(private http: HttpClient, private authenticationService: AuthenticationService){
    }

    getAllPastes(): Observable<Paste[]>{
        return this.http.get<Paste[]>(this.url, {headers: this.headers});
    }


    getPasteById(pasteId: number): Observable<Paste>{
        return this.http.get<Paste>(`${this.url}/${pasteId}`, {headers: this.headers});
    }

    createPaste(paste: Paste): Observable<Paste>{
        return this.http.post<Paste>(`${this.url}/`, paste, {headers: this.headers});
    }

    updatePaste(pasteId: number, paste: Paste): Observable<Paste>{
        return this.http.put<Paste>(`${this.url}/${pasteId}`, paste, {headers: this.headers});
    }

    deletePaste(pasteId: number): Observable<Paste>{
        return this.http.delete<Paste>(`${this.url}/${pasteId}`, {headers: this.headers});
    }

}