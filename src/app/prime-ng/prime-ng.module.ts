import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToolbarModule } from 'primeng/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    DataViewModule,
    DialogModule,
    InputTextModule,
    ProgressBarModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
