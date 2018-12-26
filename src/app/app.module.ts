// modules
import { NgModule }                from '@angular/core';
import { AppRoutingModule }        from './app-routing.module';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }        from '@angular/common/http';

// components
import { AppComponent }            from './app.component';

@NgModule({
  // components
  declarations: [ AppComponent ],
  // modules
  imports: [ AppRoutingModule, BrowserAnimationsModule, BrowserModule, HttpClientModule ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}