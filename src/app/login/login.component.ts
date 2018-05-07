import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { AuthenticationService } from '../authentication-service/authentication.service';
import { AuthenticationResponse } from '../authentication-service/authentication-response';
import { HttpErrorResponse } from '@angular/common/http';
 
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;

    private router: Router;
    private authenticationService: AuthenticationService;
    private error: HttpErrorResponse;
    private authenticationResponse: AuthenticationResponse;

 
    constructor( router: Router, authenticationService: AuthenticationService) { 
        this.router = router;
        this.authenticationService = authenticationService;
    }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password);
    }

    
}