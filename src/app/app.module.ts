import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MasterComponent } from './components/master.component';
import { MindComponent } from './components/mind.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    MindComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
