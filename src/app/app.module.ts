import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TrackerComponent } from './components/tracker/tracker.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';




@NgModule({
  declarations: [AppComponent, TrackerComponent, ShortNumberPipe, HeaderComponent],
  imports: [BrowserModule, HttpClientModule, MatTooltipModule, AppRoutingModule, 
    ToastrModule.forRoot(), BrowserAnimationsModule, FormsModule, MatSlideToggleModule, MatTableModule, MatFormFieldModule, MatInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
