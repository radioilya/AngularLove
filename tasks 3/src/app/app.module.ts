import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopmenuComponent } from './header/topmenu/topmenu.component';
import { ContetnZarezervirovannoComponent } from './contetn-zarezervirovanno/contetn-zarezervirovanno.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MediaCssComponent } from './media-css/media-css.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopmenuComponent,
    MainComponent,
    FooterComponent,
    MediaCssComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
