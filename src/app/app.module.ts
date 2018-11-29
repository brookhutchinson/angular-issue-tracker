// modules
import { NgModule }         from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule }    from '@angular/platform-browser';

// components
import { AppComponent }     from './app.component';

@NgModule({
  // components
  declarations: [ AppComponent ],
  // modules
  imports: [ AppRoutingModule, BrowserModule ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}