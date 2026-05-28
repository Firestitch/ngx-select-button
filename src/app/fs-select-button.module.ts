import { NgModule } from '@angular/core';

import { FsSelectButtonDirective } from './directives/select-button/select-button.directive';


@NgModule({
  imports: [
    FsSelectButtonDirective,
  ],
  exports: [
    FsSelectButtonDirective,
  ],
})
export class FsSelectButtonModule {
}
