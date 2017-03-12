import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo/demo1.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskdataService } from './shared/taskdata.service';
import { routes } from './app.routing';
import { HeaderComponent } from './header.component';
import { AddtaskComponent } from './tasks/addtask.component';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo1Component,
    TasksComponent,
    HeaderComponent,
    AddtaskComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [TaskdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
