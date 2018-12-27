// modules
import { NgModule }                from '@angular/core';
import { AppRoutingModule }        from './app-routing.module';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }        from '@angular/common/http';
import { MatToolbarModule }        from '@angular/material/toolbar';

// components
import { AppComponent }            from './app.component';
import { CreateIssueComponent }    from './components/create-issue/create-issue.component';
import { EditIssueComponent }      from './components/edit-issue/edit-issue.component';
import { ListIssueComponent }      from './components/list-issue/list-issue.component';
import { NavbarComponent }         from './components/navbar/navbar.component';

@NgModule({
  // modules
  imports: [ AppRoutingModule, BrowserAnimationsModule, BrowserModule, HttpClientModule, MatToolbarModule ],
  // components
  declarations: [ AppComponent, CreateIssueComponent, EditIssueComponent, ListIssueComponent, NavbarComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}