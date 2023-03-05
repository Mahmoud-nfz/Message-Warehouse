import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatePasteComponent } from './create-paste/create-paste.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: CreatePasteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
