import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleBasedDirective } from './role-based.directive';

@NgModule({
  declarations: [RoleBasedDirective],
  imports: [CommonModule],
  exports: [RoleBasedDirective]
})
export class RoleBasedModule {}
