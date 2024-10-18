import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { FsExampleModule } from '@firestitch/example';
import { FsLabelModule } from '@firestitch/label';
import { FsMessageModule } from '@firestitch/message';
import { FsSelectButtonModule } from '@firestitch/select-button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExampleComponent, ExamplesComponent } from './components';
import { ConfigureComponent } from './components/configure';


const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {}),
    BrowserAnimationsModule,
    FormsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,

    FsLabelModule,
    FsMessageModule.forRoot(),
    FsSelectButtonModule,
    FsExampleModule.forRoot({ iframeObserveBody: true }),
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    ExampleComponent,
    ConfigureComponent,
  ],
})
export class PlaygroundModule {
}
