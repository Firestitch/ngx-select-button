import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Color } from '@firestitch/select-button';
import { MatSelect } from '@angular/material/select';
import { FsSelectButtonDirective } from '../../../../src/app/directives/select-button/select-button.directive';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';


@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    styleUrl: './example.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatSelect,
        FsSelectButtonDirective,
        FormsModule,
        MatOption,
    ],
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
    { value: 'sour', name: 'Low Low Low Fat Sour Cream' },
  ];

  public Color = Color;

}
