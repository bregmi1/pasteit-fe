import { Component } from '@angular/core';
import { Paste } from '../paste-service/paste';
import { PasteService } from '../paste-service/paste.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'paste-form',
    templateUrl: './paste-form.component.html',
    styleUrls: ['./paste-form.component.css']
})
export class PasteFormComponent{
    private paste: Paste;
    private pasteService: PasteService;
    private error: HttpErrorResponse;
    private router: Router;

    constructor(router: Router, pasteService: PasteService){
        this.pasteService = pasteService;
        this.paste = new Paste();
        this.router = router;
    }

    submitPaste(){
        this.pasteService.createPaste(this.paste).subscribe(
            paste => this.router.navigate(['pastes']),
            error => this.error = error
        )
    }

}