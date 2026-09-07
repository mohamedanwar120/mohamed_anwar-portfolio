import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-projects-page',
  imports: [ DialogModule,ButtonModule,DynamicDialogModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css',
})
export class ProjectsPageComponent {

visible: { [key: string]: boolean } = {};   
  
showDialog(projectId: string) {
  this.visible[projectId] = true;
}
}




