import { Component } from '@angular/core';


@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent{
    private user: object;

    constructor(){
        this.user = {
            'name': 'John Doe',
            'email': 'john@example.com',
            'password': 'password',
            'createdOn': 1234567890
        }
    }

}