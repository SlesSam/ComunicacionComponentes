import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './padre/padre.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
