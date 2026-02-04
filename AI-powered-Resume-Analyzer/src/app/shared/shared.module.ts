// The toy box that shares common things.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertComponent } from './components/alert/alert.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    ButtonComponent,
    ModalComponent,
    LoaderComponent,
    AlertComponent,
    TruncatePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
