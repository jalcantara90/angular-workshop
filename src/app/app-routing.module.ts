import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { AttributeDataBindingComponent } from './attribute-data-binding/attribute-data-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { DirectivesAttributesComponent } from './directives-attributes/directives-attributes.component';
import { DirectivesStructuralComponent } from './directives-structural/directives-structural.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

const routes: Routes = [
  { path: 'pipes', component: PipesComponent },
  { path: 'custom-pipe', component: CustomPipesComponent },
  { path: 'custom-2way-binding', component: CustomPipesComponent },
  { path: 'attribute-directive', component: DirectivesAttributesComponent },
  { path: 'structural-directive', component: DirectivesStructuralComponent },
  { path: 'rick-and-morty', loadChildren: () => import('./rick-and-morty/rick-and-morty.module').then(m => m.RickAndMortyModule) },
  { path: 'string-interpolation', component: StringInterpolationComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'attribute-binding', component: AttributeDataBindingComponent },
  { path: 'two-way-binding', component: TwoWayDataBindingComponent },

  { path: '**', redirectTo: 'string-interpolation' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
