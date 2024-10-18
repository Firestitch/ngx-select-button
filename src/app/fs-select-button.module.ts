import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';

import { FsSelectButtonDirective } from './directives/select-button/select-button.directive';


@NgModule({
  imports: [
    CommonModule,

    MatSelectModule,
    
    FormsModule,
  ],
  exports: [
    FsSelectButtonDirective,
  ],
  declarations: [
    FsSelectButtonDirective,
  ],
})
export class FsSelectButtonModule {
}
