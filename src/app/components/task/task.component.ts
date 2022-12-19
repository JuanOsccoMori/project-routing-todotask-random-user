import { ITask, LEVELS } from './../../models/task.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  @Input() item: ITask = {
    title: '',
    description: '',
    completed: false,
    level: LEVELS.INFO
  };
}
