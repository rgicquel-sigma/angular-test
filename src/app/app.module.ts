import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsViewerComponent } from './components/events-viewer/events-viewer.component';
import { DisplayAsyncValueComponent } from './components/exercises/01-display-async-value/display-async-value.component';
import { ExReactiveFormComponent } from './components/exercises/02-reactive-form.component/ex-reactive-form.component';
import { IncrementorComponent } from './components/exercises/02-reactive-form.component/incrementor/incrementor.component';
import { ExReactiveFormInnerComponent } from './components/exercises/02-reactive-form.component/inner-component/ex-reactive-form-inner.component';
import { ExRxjsComponent } from './components/exercises/03-rxjs/ex-rxjs.component';
import { ExPromisesComponent } from './components/exercises/04-promises/ex-promises.component';
import { ExRxjs2Component } from './components/exercises/05-rxjs2/ex-rxjs2.component';
import { HomeComponent } from './components/home/home.component';
import { VarDirective } from './directives/var.directive';


@NgModule({
  declarations: [
    VarDirective,
    AppComponent,
    ExReactiveFormComponent,
    ExReactiveFormInnerComponent,
    HomeComponent,
    EventsViewerComponent,
    DisplayAsyncValueComponent,
    ExRxjsComponent,
    ExPromisesComponent,
    ExRxjs2Component,
    IncrementorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
