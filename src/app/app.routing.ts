import { Routes,RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { DemoComponent } from './demo/demo.component';
 import { AddtaskComponent } from './tasks/addtask.component';
const router:Routes=[
 
{path:'',redirectTo:'/allTask',pathMatch:'full'},
 
{path:'allTask',component:TasksComponent },
 
{path:'demo',component:DemoComponent },

{path:'addTask',component:AddtaskComponent } 
];
 
export const routes=RouterModule.forRoot(router);