import { Component } from "@angular/core";
import { UserService } from "../user-service/user.service";
import { User } from "../user-service/user";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { PasteService } from "../paste-service/paste.service";


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

    constructor(router: Router, userService: UserService){
        this.userService = userService;
        this.router = router;
        if(this.userId){
            this.userService.getUserById(this.userId).subscribe(
                user => this.user = user,
                error => this.error = error
            );
        } else{
            this.user = new User();
        }
    }

    submitUser(){
        if(this.userId){
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