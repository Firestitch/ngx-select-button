import { Component } from '@angular/core';

import { Color } from '@firestitch/select-button';


@Component({
  selector: 'example',
  templateUrl: './example.component.html',
})
export class ExampleComponent {

  public basic = null;

  public values = [
    {value: 'steak', name: 'Steak'},
    {value: 'pizza', name: 'Pizza'},
    {value: 'tacos', name: 'Tacos'},
    {value: 'sour', name: 'Low Fat Sour Cream'}
  ];

  public Color = Color;

  constructor() { }

}
