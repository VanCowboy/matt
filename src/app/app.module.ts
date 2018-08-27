import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IvdBodyComponent } from './ivd-body/ivd-body.component';
import { FameBodyComponent } from './fame-body/fame-body.component';
import { NewMergeComponent } from './new-merge/new-merge.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IvdBodyComponent,
    FameBodyComponent,
    NewMergeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
