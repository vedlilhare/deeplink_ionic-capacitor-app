import { Component , NgZone  } from '@angular/core';
import { Router } from '@angular/router';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { Platform } from '@ionic/angular';
import { BranchDeepLinks, BranchInitEvent } from 'capacitor-branch-deep-links';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private zone: NgZone , public platform: Platform) {

		this.initializeApp();
  }

    initializeApp() {
      // App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      //   this.zone.run(() => {
      //     const domain = 'maheshbillore.online';
  
      //     const pathArray = event.url.split(domain);
      //     // The pathArray is now like ['https://maheshbillore.online', '/details/42']
  
      //     // Get the last element with pop()
      //     const appPath = pathArray.pop();
      //     if (appPath) {
      //       this.router.navigateByUrl(appPath);
      //     }
      //   });
      // });
      this.platform.ready().then(() => {
      BranchDeepLinks.addListener('init', (event: BranchInitEvent) => {
               // Retrieve deeplink keys from 'referringParams' and evaluate the values to determine where to route the user
               // Check '+clicked_branch_link' before deciding whether to use your Branch routing logic
                console.log(event ,"deeplink data log");
                // alert(event);
                 alert("Open app with a Branch deep link: " + JSON.stringify(event));

               });
        
               BranchDeepLinks.addListener('initError', (error: any) => {
                 console.error(error);
               });
              });
        
    }
  }
