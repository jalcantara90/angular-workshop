import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { DirectivesAttributesComponent } from './directives-attributes/directives-attributes.component';
import { DirectivesStructuralComponent } from './directives-structural/directives-structural.component';
import { PipesComponent } from './pipes/pipes.component';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

const routes: Routes = [
  { path: 'view1', component: View1Component },
  { path: 'view2', component: View2Component },
  { path: 'pipes', component: PipesComponent },
  { path: 'custom-pipe', component: CustomPipesComponent },
  { path: 'custom-2way-binding', component: CustomPipesComponent },
  { path: 'attribute-directive', component: DirectivesAttributesComponent },
  { path: 'structural-directive', component: DirectivesStructuralComponent },
  { path: 'rick-and-morty', loadChildren: () => import('./rick-and-morty/rick-and-morty.module').then(m => m.RickAndMortyModule) },
  { path: '**', redirectTo: 'view1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
