import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map, mergeWith, Observable, Subject } from 'rxjs';
import { ObsEvent } from 'src/app/models/obs-event.model';
import { ObsEventsManagerService } from 'src/app/services/obs-events-manager.service';


const MAX_EVENTS_NB = 100;

@Component({
  selector: 'app-obs-events-viewer',
  templateUrl: './events-viewer.component.html',
  styleUrls: ['./events-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsViewerComponent {

  private allEvents: Array<ObsEvent> = [];
  private clearNotifier = new Subject<void>();
  public events$: Observable<Array<ObsEvent>>;

  public dateFormatter = Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 });

  public constructor(obsEventsService: ObsEventsManagerService) {
    this.events$ = obsEventsService.getEvents$().pipe(
      map(newEvent => {
        this.allEvents.unshift(newEvent);
        if (this.allEvents.length > MAX_EVENTS_NB) {
          this.allEvents.pop();
        }
        return this.allEvents;
      }),
      mergeWith(
        this.clearNotifier.pipe(
          map(() => {
            this.allEvents = [];
            return this.allEvents;
          })
        )
      )
    );
  }

  public clear(): void {
    this.clearNotifier.next();
  }

}
