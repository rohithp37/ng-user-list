import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from './user-card/user-card.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailDialogComponent } from './user-detail-dialog/user-detail-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';



const materials = [MatSliderModule, MatListModule, MatButtonModule, MatDialogModule, MatGridListModule];

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UserDetailDialogComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...materials
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
