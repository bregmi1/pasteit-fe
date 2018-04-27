import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PasteListComponent } from './paste-list/paste-list.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { PasteDetailsComponent } from './paste-details/paste-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { componentFactoryName } from '@angular/compiler';


@NgModule({
    declarations: [ 
        AppComponent,
        HeaderComponent,
        PasteListComponent,
        HeaderLinksComponent,
        PasteDetailsComponent,
        UserDetailsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '', 
                redirectTo: 'pastes',
                pathMatch: 'full'
            },
            {
                path: 'pastes',
                component: PasteListComponent
            },
            {
                path: 'pastes/:pasteId',
                component: PasteDetailsComponent
            },
            {
                path: 'user',
                component: UserDetailsComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [ AppComponent ]
 })
 export class AppModule { }