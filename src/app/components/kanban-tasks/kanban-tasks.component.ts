import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-kanban-tasks',
  templateUrl: './kanban-tasks.component.html',
  styleUrls: ['./kanban-tasks.component.scss'],
})
export class KanbanTasksComponent {


  todoTask: ITask[] = [
    {
      title: 'Animaciones',
      description: 'Aprender animaciones en Angular',
      completed: false,
      level: LEVELS.INFO
    },
    {
      title: 'Angular CLI',
      description: 'Aprender Comandos y cofiguraciones en Angular CLI',
      completed: false,
      level: LEVELS.URGENT
    },
    {
      title: 'Build',
      description: 'Aprender a generar builds CLI',
      completed: false,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Descplegar deploy',
      description: 'Aprender a desplegar bundles en Firebase',
      completed: false,
      level: LEVELS.BLOCKING
    },
  ]

  doneTask: ITask[] =[
    {
      title: 'Visual studio IDE',
      description: 'Configurar e instalar plugins en vsCode',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Instalar ANGULAR CLI',
      description: 'Instalar con NPM el angular CLI de forma global',
      completed: true,
      level: LEVELS.BLOCKING
    },
    {
      title: 'Crear HOLA MUNDO en angular',
      description: 'Crear con angular cli proyecto Inicial',
      completed: true,
      level: LEVELS.URGENT
    },
  ]


  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      // Actualizamos el valor completed de la tarea
      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed

      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
