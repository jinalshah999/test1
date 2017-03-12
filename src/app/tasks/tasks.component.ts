import { Component, OnInit } from '@angular/core';
import { Task } from './task';
import { TaskdataService } from '../shared/taskdata.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

allTask:Task[]=[];
  constructor(private _data:TaskdataService) { }

  ngOnInit() {

    this._data.getAllData().subscribe(
      (data:Task[])=>{
        this.allTask=data;
      },
      function(error)
      {
        console.log(error);
      },
      function(){
        console.log('patyu');
      }
    );
  }
deleteTask(item:Task){
  
  this._data.deleteTask(item).subscribe(

    (data:any)=>{

      this.allTask.splice(this.allTask.indexOf(item),1);
    
    }
  );
}
}
