import { Routes } from '@angular/router';
import { ViewAll } from './view-all/view-all';
import { Create } from './create/create';
import { UpdateDelete } from './update-delete/update-delete';

export const routes: Routes = [
    { path: '', redirectTo: 'view', pathMatch: 'full' },
    { path: 'view', component: ViewAll},
    { path: 'create', component:Create},
    { path: 'update-delete',component: UpdateDelete}

];
