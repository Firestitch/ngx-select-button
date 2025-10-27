import { Component, Inject } from '@angular/core';
import { DrawerRef, DRAWER_DATA, DrawerDataProxy } from '@firestitch/drawer';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatOption } from '@angular/material/core';


@Component({
    templateUrl: './configure.component.html',
    styleUrls: ['./configure.component.scss'],
    standalone: true,
    imports: [MatFormField, MatLabel, MatSelect, FormsModule, MatOption]
})
export class ConfigureComponent {
  public config;
  public defaultConfig;
  public galleryService;

  constructor(public drawer: DrawerRef<ConfigureComponent>,
              @Inject(DRAWER_DATA) public data: DrawerDataProxy<any>) {
    this.config = data.config;
  }
}
