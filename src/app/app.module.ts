import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';
import { UserComponent } from './head/user/user.component';
import { LogincComponent } from './login/loginc/loginc.component';
import { RegisterComponent } from './login/register/register.component';
import { GalleryComponent } from './media/gallery/gallery.component';
import { MymediaComponent } from './media/mymedia/mymedia.component';
import { UploadmediaComponent } from './media/uploadmedia/uploadmedia.component';
import { FollowersComponent } from './media/followers/followers.component';
import { MultimediaComponent } from './media/multimedia/multimedia.component';
import { SinglemediaComponent } from './media/singlemedia/singlemedia.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    LogincComponent,
    RegisterComponent,
    GalleryComponent,
    MymediaComponent,
    UploadmediaComponent,
    FollowersComponent,
    MultimediaComponent,
    SinglemediaComponent,
    AccountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
