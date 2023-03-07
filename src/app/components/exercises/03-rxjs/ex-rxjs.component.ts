import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ObservableLibraryService } from 'src/app/services/observable-library.service';


@Component({
  selector: 'app-ex-rxjs-creation',
  templateUrl: './ex-rxjs.component.html',
  styleUrls: ['./ex-rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExRxjsComponent {

  public value: number | null = null;

  public constructor(private obsLibrary: ObservableLibraryService) { }

  public start(): void {

  }

}
