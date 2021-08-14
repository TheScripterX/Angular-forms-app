import { NgModule } from '@angular/core';
//
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [SideMenuComponent],
})
export class SharedModule {}
