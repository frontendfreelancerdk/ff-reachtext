import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {SecondComponent} from './pages/second/second.component';
import {ThirdComponent} from './pages/third/third.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {FfReachtextModule} from 'ff-reachtext';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    ThirdComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FfReachtextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
