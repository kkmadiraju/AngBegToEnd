import { NgModule } from '@angular/core';
import { ArchitectureLab } from '../architecture-lab/architecture-lab';
import { LAB_TITLE } from '../tokens/lab-title';

@NgModule({
  declarations: [],
  imports: [ArchitectureLab],
  exports: [ArchitectureLab],
  providers: [{ provide: LAB_TITLE, useValue: 'Angular Architecture Lab' }],
})
export class DemoShellModule {}
