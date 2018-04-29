import { Component } from '@angular/core';
import { PasteService } from '../paste-service/paste.service';
import { Paste } from '../paste-service/paste';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'paste-list',
    templateUrl: './paste-list.component.html',
    styleUrls:['./paste-list.component.css']
})
export class PasteListComponent{
    private pastes: Paste[];
    private error: HttpErrorResponse;

    constructor(pasteService: PasteService){
        pasteService.getAllPastes().subscribe(
            pastes => this.pastes = pastes,
            error => this.error = error
        );
    }
}
