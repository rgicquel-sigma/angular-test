import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ObsEvent } from 'src/app/models/obs-event.model';


@Injectable({
  providedIn: 'root'
})
export class ObsEventsManagerService {

  private events$ = new Subject<ObsEvent>();

  public constructor() { }

  public getEvents$(): Observable<ObsEvent> {
    return this.events$.asObservable();
  }

  public emitEvent(type: ObsEvent['type'], obsName: string, obsArgs: Array<string> | null = null): void {
    const event: ObsEvent = { date: new Date(), type, obsName, obsArgs };
    this.events$.next(event);
  }
}
