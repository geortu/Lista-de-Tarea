import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { TASKS } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../service/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 tasks:Task[]= [] ;
 
  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
     this.taskservice.getTasks().subscribe((tasks) =>(this.tasks=tasks));
  }
  deleteTask(task:Task){
    this.taskservice.deleteTask(task).subscribe(() =>(this.tasks=this.tasks.filter((t) => {return t.id !== task.id} )));
  }

}
