import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Part2Component } from './part2/part2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Part2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


