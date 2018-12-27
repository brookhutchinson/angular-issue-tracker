// modules
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { ListIssueComponent }   from './components/list-issue/list-issue.component';
import { CreateIssueComponent } from './components/create-issue/create-issue.component';
import { EditIssueComponent }   from './components/edit-issue/edit-issue.component';

// define routes
const routes: Routes = [
  // create issue route
  { path: 'create-issue', component: CreateIssueComponent },
  // edit issue route
  { path: 'edit-issue/:id', component: EditIssueComponent },
  // list issue route
  { path: 'list-issue', component: ListIssueComponent },
  // default route
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  // imports
  imports: [ RouterModule.forRoot(routes) ],
  // exports
  exports: [ RouterModule ]
})
export class AppRoutingModule {}