import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MyComponentComponent } from './my-component/my-component.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { FilterPipe } from './filter.pipe';
import { TwoWayBindingCustomComponent } from './two-way-binding-custom/two-way-binding-custom.component';
import { DirectivesAttributesComponent } from './directives-attributes/directives-attributes.component';
import { DirectivesStructuralComponent } from './directives-structural/directives-structural.component';
import { HttpClientModule } from '@angular/common/http';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { AttributeDataBindingComponent } from './attribute-data-binding/attribute-data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { ComponentComunicationComponent } from './component-comunication/component-comunication.component';
import { ChildComponent } from './component-comunication/child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    PipesComponent,
    CustomPipesComponent,
    FilterPipe,
    TwoWayBindingCustomComponent,
    DirectivesAttributesComponent,
    DirectivesStructuralComponent,
    StringInterpolationComponent,
    AttributeDataBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    ComponentComunicationComponent,
    ChildComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
