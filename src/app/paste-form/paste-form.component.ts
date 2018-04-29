import { Component } from '@angular/core';
import { Paste } from '../paste-service/paste';
import { PasteService } from '../paste-service/paste.service';
import { HttpErrorResponse } from '@angular/common/http';
import { 
    Router,
    ActivatedRoute 
} from '@angular/router';

@Component({
    selector: 'paste-form',
    templateUrl: './paste-form.component.html',
    styleUrls: ['./paste-form.component.css']
})
export class PasteFormComponent{
    private pasteId: number;
    private paste: Paste;
    private pasteService: PasteService;
    private error: HttpErrorResponse;
    private router: Router;

    constructor(router: Router, route: ActivatedRoute, pasteService: PasteService){
        this.pasteService = pasteService;
        this.router = router;
        route.params.subscribe(params => this.pasteId = params['pasteId']);
        if(this.pasteId){
            pasteService.getPasteById(this.pasteId).subscribe(
                paste => this.paste = paste,
                error => this.error = error
            );
        } else {
            this.paste = new Paste();
        }
    }

    submitPaste(){
        if(this.pasteId){
            this.pasteService.updatePaste(this.pasteId, this.paste).subscribe(
                paste => this.paste = paste,
                error => this.error = error
            );
        } else {
            this.pasteService.createPaste(this.paste).subscribe(
                paste => this.router.navigate(['pastes']),
                error => this.error = error
            );
        }
    }

}