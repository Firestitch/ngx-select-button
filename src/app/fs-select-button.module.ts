import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { FsSelectButtonDirective } from './directives/select-button/select-button.directive';


@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule
  ],
  exports: [
    FsSelectButtonDirective
  ],
  entryComponents: [
  ],
  declarations: [
    FsSelectButtonDirective
  ]
})
export class FsSelectButtonModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: FsSelectButtonModule
  //   };
  // }
}
