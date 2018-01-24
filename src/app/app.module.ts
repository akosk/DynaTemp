import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GridModule} from '@progress/kendo-angular-grid';
import {KendoGridColumnTemplatesComponent} from './kendo-grid-column-templates/kendo-grid-column-templates.component';
import { GridPageComponent } from './grid-page/grid-page.component';


@NgModule({
  declarations: [
    AppComponent,
    KendoGridColumnTemplatesComponent,
    GridPageComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
