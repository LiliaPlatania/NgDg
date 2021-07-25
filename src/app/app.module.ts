import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBackgroundComponent } from './Header/header-background/header-background.component';
import { NavbarComponent } from './Header/navbar/navbar.component';
import { ResultContainerComponent } from './Header/result-container/result-container.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderBackgroundComponent,
    NavbarComponent,
    ResultContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
