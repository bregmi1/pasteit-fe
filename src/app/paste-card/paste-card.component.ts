import { Component, Input } from "@angular/core";
import { Paste } from "../paste-service/paste";


@Component({
    selector: 'paste-card',
    templateUrl: './paste-card.component.html',
    styleUrls: ['./paste-card.component.css']
})
export class PasteCardComponent{
    @Input()
    private paste: Paste;

}