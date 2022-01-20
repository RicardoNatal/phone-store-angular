import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { ScreenComponent } from './screen/screen.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [ScreenComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    MatCardModule,
    FormsModule,
    MatNativeDateModule
  ],
})
export class AboutusModule {}
