import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PasteService } from '../paste-service/paste.service';
import { Paste } from '../paste-service/paste';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'paste-details',
    templateUrl: './paste-details.component.html',
    styleUrls: ['./paste-details.component.css']
})
export class PasteDetailsComponent{
    private pasteId: number;
    private paste: Paste;
    private error: HttpErrorResponse;

    constructor(route: ActivatedRoute, pasteService: PasteService){
        route.params.subscribe(params => this.pasteId = params['pasteId']);
        pasteService.getPasteById(this.pasteId).subscribe(
            paste => this.paste = paste,
            error => this.error = error
        );
    }

}

