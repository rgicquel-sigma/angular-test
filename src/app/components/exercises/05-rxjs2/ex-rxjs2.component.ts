import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ObservableLibraryService } from 'src/app/services/observable-library.service';


@Component({
  selector: 'app-ex-rxjs2-creation',
  templateUrl: './ex-rxjs2.component.html',
  styleUrls: ['./ex-rxjs2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExRxjs2Component {

  public value: number | null = null;

  public constructor(private obsLibrary: ObservableLibraryService) { }

  public start(): void {

  }

}
