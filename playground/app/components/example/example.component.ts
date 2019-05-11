import { Component, AfterViewInit } from '@angular/core';
import { FsExampleComponent } from '@firestitch/example';
import { ConfigureComponent } from '../configure';

@Component({
  selector: 'example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent implements AfterViewInit {

  public basic;
  public primary;

  public values = [
    {value: 'steak', name: 'Steak'},
    {value: 'pizza', name: 'Pizza'},
    {value: 'tacos', name: 'Tacos'},
    {value: 'sour', name: 'Low Fat Sour Cream'}
  ];

  public config: any = { color: 'primary' };

  constructor(private example: FsExampleComponent) {}

  ngAfterViewInit() {
    setTimeout(() => {
    this.example.setConfigureComponent(ConfigureComponent, {
      config: this.config
    });
  });
  }
}
