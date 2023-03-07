import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayAsyncValueComponent } from './components/exercises/01-display-async-value/display-async-value.component';
import { ExReactiveFormComponent } from './components/exercises/02-reactive-form.component/ex-reactive-form.component';
import { ExRxjsComponent } from './components/exercises/03-rxjs/ex-rxjs.component';
import { ExPromisesComponent } from './components/exercises/04-promises/ex-promises.component';
import { ExRxjs2Component } from './components/exercises/05-rxjs2/ex-rxjs2.component';
import { HomeComponent } from './components/home/home.component';


let index = 0;
let bonusIndex = 1;
export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: `ex-${++index}`, component: DisplayAsyncValueComponent, data: {
    title: `Ex. ${index}: Display async value`,
    description: null
  }},
  { path: `ex-${++index}`, component: ExReactiveFormComponent, data: {
    title: `Ex. ${index}: Reactive form`,
    description: null
  }},
  { path: `ex-${++index}`, component: ExRxjsComponent, data: {
    title: `Ex. ${index}: Rxjs basics`,
    description: null
  }},
  { path: `ex-${++index}`, component: ExPromisesComponent, data: {
    title: `Ex. ${index}: OnPush`,
    description: null
  }},
  { path: `ex-${++index}`, component: ExRxjs2Component, data: {
    title: `Ex. ${index}: Rxjs basics 2`,
    description: null
  }},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
