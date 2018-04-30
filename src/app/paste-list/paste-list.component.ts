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
    private pasteService: PasteService;

    constructor(pasteService: PasteService){
        this.pasteService = pasteService;
        this.pasteService.getAllPastes().subscribe(
            pastes => this.pastes = pastes,
            error => this.error = error
        );
    }


    handlePasteDeleted(paste: Paste){
        this.pasteService.deletePaste(paste.pasteId).subscribe(
            paste => this.deletePasteFromList(paste.pasteId),
            error => this.error = error
        );
    }

    deletePasteFromList(pasteId: number){
        const index: number = this.pastes.findIndex(paste => paste.pasteId === pasteId);
        this.pastes.splice(index, 1);
    }
}
