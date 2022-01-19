import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [NavComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [NavComponent],
})
export class CoreModule {}
