import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ENVIRONMENT_VALUE } from './environments/environment';
import 'autotrack';

if (ENVIRONMENT_VALUE.production) {
  enableProdMode();
  window.console.log = function(){};
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
})



