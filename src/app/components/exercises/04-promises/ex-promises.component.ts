import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-ex-promises-creation',
  templateUrl: './ex-promises.component.html',
  styleUrls: ['./ex-promises.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExPromisesComponent {

  public constructor() { }

  public start(): void {

  }
}
