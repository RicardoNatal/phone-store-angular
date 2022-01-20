import { AboutusModule } from './aboutus/aboutus.module';
import { PeopleModule } from './people/people.module';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsModule,
    PeopleModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSnackBarModule,
    AboutusModule
  ],
  exports: [],
})
export class FeaturesModule {}
