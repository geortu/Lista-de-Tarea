import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Mi Lista de Tareas';
  showAddTask:boolean=false;
  suscription?:Subscription;
  constructor(private uiService:UiService) { 
     this.suscription= this.uiService.onToggle().subscribe(value=>this.showAddTask=value);
  }

  ngOnInit(): void {
  }
  toggleAddtask(){
    this.uiService.toggleAddTask();
  }

}
