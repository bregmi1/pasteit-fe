import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user-service/user.service';
import { User } from '../user-service/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent{
    private userId: number = 1;
    private user: User;
    private error: HttpErrorResponse;

    constructor( userService: UserService){
        userService.getUser().subscribe(
            user => this.user = user,
            error => this.error = error
        );
    }

}