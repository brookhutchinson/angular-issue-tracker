// modules
import { NgModule }                from '@angular/core';
import { AppRoutingModule }        from './app-routing.module';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }        from '@angular/common/http';
import { MatToolbarModule }        from '@angular/material/toolbar';

// components
import { AppComponent }            from './app.component';
import { NavbarComponent }         from './components/navbar/navbar.component';

@NgModule({
  // modules
  imports: [ AppRoutingModule, BrowserAnimationsModule, BrowserModule, HttpClientModule, MatToolbarModule ],
  // components
  declarations: [ AppComponent, NavbarComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}