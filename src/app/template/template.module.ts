import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//
import { TemplateRoutingModule } from './template-routing.module';
//
import { BasicsComponent } from './basics/basics.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchesComponent } from './switches/switches.component';

@NgModule({
  declarations: [BasicsComponent, DynamicComponent, SwitchesComponent],
  imports: [CommonModule, FormsModule, TemplateRoutingModule],
})
export class TemplateModule {}
