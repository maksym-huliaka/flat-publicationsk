import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlatListComponent } from './flat-list/flat-list.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from "@angular/flex-layout";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MatChipsModule} from '@angular/material/chips';
import { FlatFilterComponent } from './flat-filter/flat-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    FlatListComponent,
    FlatFilterComponent,
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FlexModule,
    InfiniteScrollModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
