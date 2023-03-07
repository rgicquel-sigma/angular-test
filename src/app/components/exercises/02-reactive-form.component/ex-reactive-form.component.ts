import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-ex-reactive-form',
  templateUrl: './ex-reactive-form.component.html',
  styleUrls: ['./ex-reactive-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExReactiveFormComponent {

  public constructor() { }

  public sendData(): Observable<void> {
    return of(undefined);
  }

}
