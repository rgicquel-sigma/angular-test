import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Observable, share } from 'rxjs';
import { ROUTES } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public readonly ROUTES = ROUTES.filter(r => r.data);

  public routeTitle$: Observable<string>;
  public routeDescription$: Observable<string>;

  public constructor(private router: Router) {
    const activationEndData$ = router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      map(event => (event as ActivationEnd).snapshot.data),
      share()
    );

    this.routeTitle$ = activationEndData$.pipe(map(data => data['title'] ?? ''));
    this.routeDescription$ = activationEndData$.pipe(map(data => data['description'] ?? ''));
  }

  public goTo(route: string): void {
    this.router.navigate([route]);
  }
}
