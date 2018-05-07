import { Component } from '@angular/core';
import { Paste } from '../paste-service/paste';
import { PasteService } from '../paste-service/paste.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

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
    private date: string;
    private datePickerConfig: Partial<BsDatepickerConfig>;

    constructor(router: Router, route: ActivatedRoute, pasteService: PasteService){
        this.pasteService = pasteService;
        this.router = router;
        route.params.subscribe(params => this.pasteId = params['pasteId']);
        this.datePickerConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            showWeekNumbers: false,
            minDate: new Date()
        });
        if(this.pasteId){
            pasteService.getPasteById(this.pasteId).subscribe(
                paste => {
                    this.paste = paste;
                },
                error => this.error = error
            );
        } else {
            this.paste = new Paste();
            this.date = null;
        }
    }

    isValid(): boolean{

        return true;
    }

    submitPaste(){
        if(this.pasteId){
            this.pasteService.updatePaste(this.pasteId, this.paste).subscribe(
                paste => this.router.navigate(['pastes', this.pasteId]),
                error => this.error = error
            );
        } else {
            this.pasteService.createPaste(this.paste).subscribe(
                paste => this.router.navigate(['pastes']),
                error => this.error = error
            );
        }
    }

    dateChanged(value: string): void{
        const d: Date = new Date(value);
        const l: number = d.getTime();
        this.paste.expiresOn = l;
    }

}