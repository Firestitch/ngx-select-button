import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Color } from '@firestitch/select-button';


@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent {

  public basic;
  public accent = 'pizza';
  public warn = 'tacos';
  public primary = 'sour';

  public values = [
    { value: 'steak', name: 'Steak' },
    { value: 'pizza', name: 'Pizza' },
    { value: 'tacos', name: 'Tacos' },
    { value: 'sour', name: 'Low Fat Sour Cream' },
  ];

  public Color = Color;

}
