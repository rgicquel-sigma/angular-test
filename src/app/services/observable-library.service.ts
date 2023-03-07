import { Injectable } from '@angular/core';
import { BehaviorSubject, defer, delay, first, map, merge, Observable, of, skipUntil, switchMap, takeWhile, tap, throwError, timer } from 'rxjs';
import { ObsEventsManagerService } from './obs-events-manager.service';


const HTTP_DELAY = 1000; // ms
const COUNTER_INTERVAL = 1000; // ms
const USER_1 = 'User A';
const USER_2 = 'User B';

@Injectable({
  providedIn: 'root'
})
export class ObservableLibraryService {

  private userSubject$ = new BehaviorSubject<string>(USER_1);

  public constructor(private obsEvents: ObsEventsManagerService) { }

  public httpGetRandom$(obsDelay: number = HTTP_DELAY): Observable<number> {
    const obs$ = defer(() => of(Math.floor(Math.random() * 10))).pipe(
      delay(obsDelay)
    );

    return this.traceObsEvents$(obs$, 'httpGetRandom$', arguments);
  }

  public httpGetMultiply$(value1: number, value2: number, obsDelay: number = HTTP_DELAY): Observable<number> {
    const obs$ = defer(() => of(value1 * value2)).pipe(
      delay(obsDelay)
    );

    return this.traceObsEvents$(obs$, 'httpGetMultiply$', arguments);
  }

  public httpGetCapitalize$(value: string, obsDelay: number = HTTP_DELAY): Observable<string> {
    const obs$ = defer(() => of(value.toUpperCase())).pipe(
      delay(obsDelay)
    );

    return this.traceObsEvents$(obs$, 'httpGetCapitalize$', arguments);
  }

  public httpGetError$(obsDelay: number = HTTP_DELAY): Observable<number> {
    const obs$ = of(null).pipe(
      delay(obsDelay),
      switchMap(() => throwError(() => new Error('An expected error occurred in the simulated HTTP call.')))
    );

    return this.traceObsEvents$(obs$, 'httpGetError$', arguments);
  }

  public createDownCounter$(countStart: number): Observable<number> {
    const obs$ = timer(0, COUNTER_INTERVAL).pipe(
      map(value => countStart - value),
      takeWhile((value) => value >= 0)
    );

    return this.traceObsEvents$(obs$, 'downCounter$', arguments);
  }

  public createUpCounter$(): Observable<number> {
    const obs$ = timer(0, COUNTER_INTERVAL);

    return this.traceObsEvents$(obs$, 'upCounter$', arguments);
  }

  public getUser$(): Observable<string> {
    const firstValue$ = this.userSubject$.pipe(delay(4000), first());
    const obs$ = merge(
      firstValue$,
      this.userSubject$.pipe(skipUntil(firstValue$))
    );

    return this.traceObsEvents$(obs$, 'getUser$', arguments);
  }

  public switchUser(): void {
    if (this.userSubject$.value === USER_1) {
      this.userSubject$.next(USER_2);
    } else {
      this.userSubject$.next(USER_1);
    }
  }

  public traceObsEvents$<T>(obs$: Observable<T>, obsName: string, args?: IArguments): Observable<T> {
    const startObs$ = of(null).pipe(
      tap(() => this.obsEvents.emitEvent('START', obsName, (args && args.length > 0 ? Array.from(args) : null))),
      switchMap(() => obs$)
    );

    return new Observable(observer => {
      let isRunning = true;

      const sub = startObs$.subscribe({
        next: value => {
          this.obsEvents.emitEvent('NEXT', obsName, [((value as any)['toString'] ? (value as any).toString() : JSON.stringify(value))]);
          observer.next(value);
        },
        error: (error: unknown) => {
          isRunning = false;
          this.obsEvents.emitEvent('ERROR', obsName);
          observer.error(error);
        },
        complete: () => {
          isRunning = false;
          this.obsEvents.emitEvent('COMPLETE', obsName);
          observer.complete();
        },
      });

      return () => {
        sub.unsubscribe();
        if (isRunning) {
          this.obsEvents.emitEvent('CANCELLED', obsName);
        }
        this.obsEvents.emitEvent('UNSUB', obsName);
      };
    });
  }
}
