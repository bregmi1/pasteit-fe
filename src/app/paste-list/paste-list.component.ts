import { Component } from '@angular/core';

@Component({
    selector: 'paste-list',
    templateUrl: './paste-list.component.html',
    styleUrls:['./paste-list.component.css']
})
export class PasteListComponent{
    private pastes: object[];

    constructor(){
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
    }
}
