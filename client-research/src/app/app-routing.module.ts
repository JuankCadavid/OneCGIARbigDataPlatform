import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [

  {
		path: '',
		redirectTo: '/wather',
		pathMatch: 'full'
	},
	{
		path: 'wather',
		component: WeatherComponent
	},
	{
		path: 'aboutus',
		loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
