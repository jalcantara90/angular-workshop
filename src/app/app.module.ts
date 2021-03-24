import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyComponentComponent } from './my-component/my-component.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { FilterPipe } from './filter.pipe';
import { TwoWayBindingCustomComponent } from './two-way-binding-custom/two-way-binding-custom.component';
import { DirectivesAttributesComponent } from './directives-attributes/directives-attributes.component';
import { DirectivesStructuralComponent } from './directives-structural/directives-structural.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    View1Component,
    View2Component,
    PipesComponent,
    CustomPipesComponent,
    FilterPipe,
    TwoWayBindingCustomComponent,
    DirectivesAttributesComponent,
    DirectivesStructuralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
