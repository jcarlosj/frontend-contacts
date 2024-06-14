import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageContactComponent } from './pages/page-contact/page-contact.component';

const routes: Routes = [
  { path: 'contact', component: PageContactComponent },
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: '**', redirectTo: 'contact', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
