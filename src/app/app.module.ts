import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  GridModule,
  PageService,
  SortService,
  FilterService,
  GroupService,
} from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AppComponent, TableComponent, InputComponent],
  imports: [BrowserModule, AppRoutingModule, GridModule, TextBoxModule],
  providers: [PageService, SortService, FilterService, GroupService],
  bootstrap: [AppComponent],
})
export class AppModule {}
