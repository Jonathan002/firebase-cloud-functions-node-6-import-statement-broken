import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'angular2-markdown';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ENVIRONMENT_VALUE } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'summary-docs' }),
    BrowserAnimationsModule,
    FormsModule,
    // --------
    TabsModule.forRoot(),
    MarkdownModule.forRoot(),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}

//https://stackoverflow.com/questions/39428132/custom-elements-schema-added-to-ngmodule-schemas-still-showing-error


// 
// 