import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ObservableLibraryService } from 'src/app/services/observable-library.service';


@Component({
  selector: 'app-display-async-value',
  templateUrl: './display-async-value.component.html',
  styleUrls: ['./display-async-value.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayAsyncValueComponent {

  public constructor(private dataService: ObservableLibraryService) { }

  public start(): void {

  }

}
