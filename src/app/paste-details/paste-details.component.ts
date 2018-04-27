import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'paste-details',
    templateUrl: './paste-details.component.html',
    styleUrls: ['./paste-details.component.css']
})
export class PasteDetailsComponent{
    private pasteId: number;
    private pastes: object[];
    private paste: object;

    constructor(route: ActivatedRoute){
        route.params.subscribe(params => this.pasteId = params['pasteId']);
        this.pastes = [
            {
                "pasteId": 1,
                "body": "This is the body of our first blog post.",
                "title": "First Paste",
                "userId": "1",
                "lastUpdated": 1493614800000,
                "createdOn": 1499007681505,
                "expiresOn": 1553614800000
            },
            {
                "pasteId": 2,
                "title": "Second Paste",
                "body": " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan erat nec justo tempor, ut posuere nisl pretium. Morbi rutrum mauris eu turpis convallis iaculis. Nulla varius purus vitae feugiat venenatis. Proin vulputate augue nibh. Pellentesque facilisis elementum neque ut egestas. Nulla et tortor metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa orci, dapibus ut dolor sed, venenatis viverra risus.",
                "userId": "1",
                "lastUpdated": 1493701200000,
                "createdOn": 1499007681505,
                "expiresOn": 1553614800000
            },
            {
                "postId": 3,
                "title": "First Paste",
                "body": "This is the body of our third blog post.  It has a few more sentences.  But it doesnt have content that is any more interesting.",
                "userId": "2",
                "lastUpdated": 1493701200000,
                "createdOn": 1499007681505,
                "expiresOn": 1553614800000
            }
        ];
        this.paste = this.pastes.filter(paste => paste['pasteId'] == this.pasteId)[0];
    }

}