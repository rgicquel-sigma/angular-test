import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'app-incrementor',
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncrementorComponent {

  public value: number = 0;

  public constructor() { }

  public increment() {
    this.value++;
  }

  public decrement() {
    this.value--;
  }
}
