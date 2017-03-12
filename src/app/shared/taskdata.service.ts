import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Task } from '../tasks/task';
import 'rxjs/Rx';
@Injectable()
export class TaskdataService {

  url: string = "https://rkdemotask.herokuapp.com/Tasks/";
  constructor(private _http: Http) { }
  getAllData() {

    return this._http.get(this.url)
      .map((res: Response) => res.json());
  }
  addTask(item: Task) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let body=JSON.stringify(item);
    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.url,body,options)
      .map((response: Response) => response.json());
  }
  deleteTask(item: Task) {

    let headers = new Headers({ 'Content-Type': 'application/json' });

    let options = new RequestOptions({ headers: headers });

    return this._http.delete(this.url + item.Id, options)
      .map((response: Response) => response.json());

  }
}
