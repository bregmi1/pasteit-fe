import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PasteListComponent } from './paste-list/paste-list.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { PasteDetailsComponent } from './paste-details/paste-details.component';
import { PasteFormComponent } from './paste-form/paste-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { componentFactoryName } from '@angular/compiler';
import { PasteService } from './paste-service/paste.service';
import { UserService } from './user-service/user.service';
import { UserFormComponent } from './user-form/user-form.component';
import { PasteCardComponent } from './paste-card/paste-card.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication-service/authentication.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
    declarations: [ 
        AppComponent,
        HeaderComponent,
        PasteListComponent,
        HeaderLinksComponent,
        PasteDetailsComponent,
        PasteFormComponent,
        PasteCardComponent,
        UserDetailsComponent,
        UserFormComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BsDatepickerModule.forRoot(),
        FormsModule,
        RouterModule.forRoot([
            {
                path: '', 
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path:'login',
                component: LoginComponent
            },
            {
                path: 'pastes',
                component: PasteListComponent
            },
            {
                path: 'pastes/create',
                component: PasteFormComponent
            },
            {
                path: 'pastes/:pasteId',
                component: PasteDetailsComponent
            },
            {
                path: 'pastes/:pasteId/update',
                component: PasteFormComponent
            },
            {
                path: 'user',
                component: UserDetailsComponent
            },
            {
                path: 'user/create',
                component: UserFormComponent
            },
            {
                path: 'user/update',
                component: UserFormComponent
            }
        ])
    ],
    providers: [
        PasteService,
        UserService,
        AuthenticationService
    ],
    bootstrap: [ AppComponent ]
 })
 export class AppModule { }