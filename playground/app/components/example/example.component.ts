import { Component } from '@angular/core';

@Component({
  selector: 'example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent {

public basic;
public primary;

  values = [
    {value: 'steak', name: 'Steak'},
    {value: 'pizza', name: 'Pizza'},
    {value: 'tacos', name: 'Tacos'},
    {value: 'sour', name: 'Low Fat Sour Cream'}
  ];
}
