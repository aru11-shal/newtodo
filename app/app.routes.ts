import { Routes } from '@angular/router';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path:'',
    component: TodolistComponent,
    pathMatch:'full'
    },
    {
        path:'home',
    component: TodolistComponent,
    pathMatch:'full'
    },
    {
        path:'about',
    component: AboutComponent,
    pathMatch:'full'
    },

];
