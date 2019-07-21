import { RouterModule, Routes } from '@angular/router';
import { BaseStationsComponent } from './components/base-stations/base-stations.component';
import { MapComponent } from './components/map/map.component';

// create routes for main page,detailpage and others path
const appRoutes: Routes = [
    {path:'', component: BaseStationsComponent},
    {path:'map/:id', component: MapComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
  
  ];

  export const AppRouting = RouterModule.forRoot(appRoutes, {});