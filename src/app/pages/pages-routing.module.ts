/**
 * Import of Angular's modules
 */
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
/**
 * Import of application's components
 */
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '',
  component: PagesComponent,
  children: [

    {
      path:'observation',
      loadChildren:()=> import('./observation/observation.module')
        .then(m => m.ObservationModule)
    },
    {
      path:'animal',
      loadChildren:()=> import('./animal/animal.module')
        .then(m => m.AnimalModule)
    },

    {path:'',
      redirectTo:'observation',pathMatch:'full'
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
