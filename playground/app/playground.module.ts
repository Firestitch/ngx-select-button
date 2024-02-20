import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';

import { FsSelectButtonModule } from '@firestitch/select-button';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsDrawerModule } from '@firestitch/drawer';
import { FsLabelModule } from '@firestitch/label';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './material.module';
import { ExampleComponent, ExamplesComponent } from './components';
import { ConfigureComponent } from './components/configure';


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
        FlexLayoutModule,
        MatButtonModule,
        MatButtonModule,
        FsDrawerModule,
        FsLabelModule,
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
        FsMessageModule.forRoot(),
        FsExampleModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        ExamplesComponent,
        ExampleComponent,
        ConfigureComponent
    ],
    providers: []
})
export class PlaygroundModule {
}
