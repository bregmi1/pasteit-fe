import { Component } from '@angular/core';
import 'rxjs/add/operator/filter';
import { 
    Router,
    RouterEvent,
    NavigationStart
 } from '@angular/router';


@Component({
    selector: 'header-links',
    templateUrl: './header-links.component.html',
    styleUrls: ['./header-links.component.css']
})
export class HeaderLinksComponent{
    private router: Router;
    private currentRoute: string;

    constructor(router: Router){
        this.router = router;
        this.router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((event: RouterEvent) => this.setCurrentRoute(event.url));
    }

    private goToRoute(url: string){
        this.router.navigate([url]);
    }

    private setCurrentRoute(url: String): void{
        if(url.indexOf('pastes') > -1){
            this.currentRoute = 'pastes';
        } else if(url.indexOf('user') > -1){
            this.currentRoute = 'user';
        } else{
            this.currentRoute = 'pastes';
        }
    }
}