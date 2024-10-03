import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { FsDrawerModule } from '@firestitch/drawer';
import { FsExampleModule } from '@firestitch/example';
import { FsLabelModule } from '@firestitch/label';
import { FsMessageModule } from '@firestitch/message';
import { FsSelectButtonModule } from '@firestitch/select-button';

import { AppComponent } from './app.component';
import { ExampleComponent, ExamplesComponent } from './components';
import { ConfigureComponent } from './components/configure';
import { AppMaterialModule } from './material.module';


const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsSelectButtonModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    MatButtonModule,
    MatButtonModule,
    FsDrawerModule,
    FsLabelModule,
    RouterModule.forRoot(routes, {}),
    FsMessageModule.forRoot(),
    FsExampleModule.forRoot({ iframeObserveBody: true }),
  ],
  declarations: [
    AppComponent,
    ExamplesComponent,
    ExampleComponent,
    ConfigureComponent
  ],
})
export class PlaygroundModule {
}
