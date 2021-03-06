import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Mod1Component } from './mod1.component';
import { Mod1Pipe } from './mod1.pipe';

@NgModule({
  declarations: [Mod1Component, Mod1Pipe],
  imports: [CommonModule],
  exports: [Mod1Component],
})
export class Mod1Module {}
