import { Component, OnInit } from '@angular/core';
import { TaskdataService } from '../shared/taskdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
model = {Id:'',Title:'',Status:'pending'};
status:string[]=[
  'done',
  'pending'
];
  constructor(private _data:TaskdataService,private _route:Router) { }

  ngOnInit() {
  }
taskSubmit(){
  this._data.addTask(this.model).subscribe(
    (data:any)=>{

      this._route.navigate(['allTask']);
    }
  );
}
}
