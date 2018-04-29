import { Component } from "@angular/core";
import { UserService } from "../user-service/user.service";
import { User } from "../user-service/user";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";


@Component({
    selector: 'user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']

})
export class UserFormComponent{
    private userService: UserService;
    private user: User;
    private error: HttpErrorResponse;
    private router: Router;

    constructor(router: Router, userService: UserService){
        this.userService = userService;
        this.router = router;
        this.user = new User();
    }

    submitUser(){
        this.userService.createUser(this.user).subscribe(
            user => this.router.navigate(['user']),
            error => this.error = error
        )
    }

}