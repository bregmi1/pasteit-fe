import { Component } from "@angular/core";
import { UserService } from "../user-service/user.service";
import { User } from "../user-service/user";
import { HttpErrorResponse } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { PasteService } from "../paste-service/paste.service";
import { AuthenticationService } from "../authentication-service/authentication.service";


@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']

})
export class UserFormComponent{
    private userService: UserService;
    private userId: number;
    private user: User;
    private error: HttpErrorResponse;
    private router: Router;
    private authenticationService: AuthenticationService;
    private loggedIn: boolean;

    constructor(router: Router, userService: UserService){
        this.userService = userService;
        this.router = router;
        if(this.router.url.indexOf('update') > -1){
            this.userService.getUser().subscribe(
                user => {
                    this.user = user;
                    this.userId = user.userId;
                },
                error => this.error = error
            );
        } else if(this.router.url.indexOf('create') > -1){
            this.user = new User();  
        }
    }

    
    submitUser(){
        console.log("fuck");

        if(this.router.url.indexOf('update') > -1){
            this.userService.updateUser(this.userId, this.user).subscribe(
                user => this.router.navigate(['user']),
                error => this.error = error
            );
        }else{
            this.userService.createUser(this.user).subscribe(
                user => this.router.navigate(['user']),
                error => this.error = error
            );
        }
    }

}