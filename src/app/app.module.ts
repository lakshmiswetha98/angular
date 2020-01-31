import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipeComponent } from './pipes/custom-pipe/custom-pipe.component';
import { InitialPipe } from './initial.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipeComponent,
    InitialPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
