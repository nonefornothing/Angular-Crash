import { TaskService } from './../../services/task.service';
import { Task } from '../../Task';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

   tasks: Task[] = [];

  constructor(private TaskService: TaskService) {
  }

  ngOnInit(): void {
    this.TaskService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }

}
