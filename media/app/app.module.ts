import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media.component';
import { MediaBaseComponent } from './media-base/media-base.component';
import { MediaListComponent } from './media-list/media-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    MediaBaseComponent,
    MediaListComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
