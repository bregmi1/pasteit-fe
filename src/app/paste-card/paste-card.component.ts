import { 
    Component, 
    Input,
    Output,
    EventEmitter 
} from "@angular/core";
import { Paste } from "../paste-service/paste";
import { PasteService } from "../paste-service/paste.service";


@Component({
    selector: 'paste-card',
    templateUrl: './paste-card.component.html',
    styleUrls: ['./paste-card.component.css']
})
export class PasteCardComponent{
    @Input()
    private paste: Paste;

    @Output()
    private pasteDeleted: EventEmitter<Paste>;

    constructor(){
        this.pasteDeleted = new EventEmitter<Paste>();
    }


    deletePaste(){
        this.pasteDeleted.emit(this.paste);
    }

}