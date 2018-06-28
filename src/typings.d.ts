/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// Pretty Print's global object at index.html
declare const PR: any;

declare const globalDebugger: any;

interface appNav {
  navList: object[];
}

declare const debugLog: any;

interface coordinates {
  x: number;
  y: number
}

// This will have to be moved elsewhere since it 
// has dependencies. Importing these dependencies
// will cause a need to import interfaces and declared
// globals break..
interface ModuleFactoryRoutes {
  moduleName: String;
  moduleFactory: any; // ComponentFactory
  moduleInjector: any; // Injector
  modulePopupRoutes?: any; // Routes[] | false
  moduleModalRoutes?: any; // Routes[] | false,
  moduleModalSecondaryRoutes?: any; // Routes[] | false,
  moduleModalTertiaryRoutes?: any; // Routes[] | false,
}

interface RouteMasterInbox {
  routeMasterMail: any;
  somethingElse: any;
}


// ------- Paypal ----------
declare const paypal: any;


// type popupLinkArray = []


         // check for 
        // add route.snapshot.url to string var
        // compare string var to list.
        
        // on dev mode make sure registred routes don't conflict. 








    // .map((route) => {
    //   // while (route) route = route.firstChild;
      
    //   while (route) {
    //     // myArray.push(url.value[0].path)
    //     console.log(route.snapshot.url, 'snapshot');
    //     console.log(route);
    //     // for (const item of route.children) {
    //     //   if (item.outlet === 'app-modal') {
    //     //     console.log('App-modal Found!');
    //     //     console.log(item);
    //     //   }
    //     // }
    //     route = route.firstChild;
    //   }

      
    // })
    // .subscribe(

    // on navigationEnd
    // check - if Modal/Popup UrlSegmentGroups exist
    //tru ->
    //  value is concatinated
    //  compare: value === given path
    //  emit component + stuff in observable



        // for (const item of this.modalSecondaryRoutes) {
    //   if (item.path === moduleName) {
    //   //   for (const route of item.modulePopupRoutes) {
    //   //     if (route.path === routeName) {
    //   //       // Both Module and Route match, will update the obsevable. Popup Directive listening to stream will create component.
    //   //       this.shouldActivatePopup.next({
    //   //         componentFactory: item.moduleFactory,
    //   //         injector: item.moduleInjector,
    //   //         component: route.component
    //   //       });
    //   //       // Update DataMail with data for the component to get.
    //   //       this.dataMail = data;
    //   //     }
    //     // }
    //   } else {
    //     // tslint:disable-next-line:max-line-length
    //     throw Error('PopupService.createPopup() routeName argument did not match the popup routes registered to it.\n Route Name Evaluating: ' + routeName);
    //   }
    // }


    // interface outlet {
    //   name: String;
    //   routes: any;
    //   thing?: any;
    //   bur? : any;
    //   shouldActivate?: any;
    //   get shouldActivate$?: any;
    //   shouldClose?: Boolean;
    // }
    // interface outlets {
    //   popupRoutes: outlet;
    //   modalRoutes: outlet;
    //   modalSecondaryRoutes: outlet;
    //   modalTertiaryRoutes: outlet;
    // }


    // private outlets: any = {
    //   popupRoutes: {
    //     name: 'app-popup', routes: [],
    //     shouldActivate: new Subject<any>(), shouldActivate$: this.shouldActivate.asObservables(), shouldClose: true
    //   },
    //   modalRoutes: {
    //     name: 'app-modal', routes: [],
    //     shouldActivate: new Subject<any>(), get shouldActivate$() { return this.shouldActivate.asObservables(); }, shouldClose: true
    //   },
    //   modalSecondaryRoutes: {
    //     name: 'app-secondary-modal', routes: [],
    //     shouldActivate: new Subject<any>(), get shouldActivate$() { return this.shouldActivate.asObservables(); }, shouldClose: true
    //   },
    //   modalTertiaryRoutes: {
    //     name: 'app-tertiary-modal', routes: [],
    //     shouldActivate: new Subject<any>(), get shouldActivate$() { return this.shouldActivate.asObservables(); }, shouldClose: true
    //   }
    // };