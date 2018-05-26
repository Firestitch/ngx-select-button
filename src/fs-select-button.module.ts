import './styles.scss';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsSelectButtonDirective } from './directives';
import { MatSelectModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsSelectButtonModule
    };
  }
}
