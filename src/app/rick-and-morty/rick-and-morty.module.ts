import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickAndMortyComponent } from './rick-and-morty.component';
import { RickAndMortyService } from './rick-and-morty.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: RickAndMortyComponent }
];

@NgModule({
  declarations: [RickAndMortyComponent],
  providers: [RickAndMortyService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RickAndMortyComponent]
})
export class RickAndMortyModule { }
