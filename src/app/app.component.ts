import { WINDOW } from '@ng-toolkit/universal';
import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationCancel } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading;
  @ViewChild('animateChild') animateChild: any;
  constructor(@Inject(WINDOW) private window: Window, private router: Router, @Inject(PLATFORM_ID) public platformId: string) {
  }

  getPage(outlet) {

    return "main animated " + outlet.activatedRouteData['animation'] || 'bounceInUp';
  }

  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
        this.loading = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.loading = false;

          if (isPlatformBrowser(this.platformId)) {
            this.window.scrollTo(0, 0);
          }
        }
      });
  }
}
