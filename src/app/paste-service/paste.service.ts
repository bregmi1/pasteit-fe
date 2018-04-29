import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Paste } from './paste';


@Injectable()
export class PasteService{
    private url: string = 'http://localhost:8080/api/v1/paste';
    private pastes: Paste[];
    private http: HttpClient;

    constructor(http: HttpClient){
        this.http = http;
    }

    getAllPastes(): Observable<Paste[]>{
        return this.http.get<Paste[]>(this.url);
    }


    getPasteById(pasteId: number): Observable<Paste>{
        return this.http.get<Paste>(`${this.url}/${pasteId}`);
    }

    createPaste(paste: Paste): Observable<Paste>{
        return this.http.post<Paste>(`${this.url}/`, paste);
    }

    updatePaste(pasteId: number, paste: Paste): Observable<Paste>{
        return this.http.put<Paste>(`${this.url}/${pasteId}`, paste);
    }

}