import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkDetailsComponent } from './components/drink-details/drink-details.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/drinks', pathMatch: 'full' },
  { path: 'drinks', component: DrinkListComponent },
  { path: 'drinks/:id', component: DrinkDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
