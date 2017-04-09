import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { routing } from './dashboard.router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    DashboardComponent
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule {}
