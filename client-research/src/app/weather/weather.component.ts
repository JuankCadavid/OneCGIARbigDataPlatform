import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { animalsMarker, marker } from '../shared/models/maps';
import { WeatherSericeService } from './services/weather-serice.service';


@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: [ './weather.component.css' ]
})
export class WeatherComponent implements OnInit {
	lat: number;
	lng: number;
	zoom:number;

	animalMarker: animalsMarker[];
	totalAnimals: number;
	totlaAnimalsA: number = 0;
	totalAnimalsD: number = 0;
	countryRestriction: any;
	labelZone:string;
	zones:any;

	markers: marker[];

	constructor(private weatherservice: WeatherSericeService) {}

	ngOnInit() {
		this.showZone(true);
		this.getZones();
		this.getAnimalsMarker();
	}

	getAnimalsMarker() {
		this.weatherservice.getAnimals().subscribe(
			(res: any) => {
				this.animalMarker = res.animals;

				for (let index = 0; index < this.animalMarker.length; index++) {
					const status = this.animalMarker[index].status;
					this.totalAnimals = index + 1;

					if (status == 'A') {
						this.totlaAnimalsA++;
					} else if (status == 'D') {
						this.totalAnimalsD++;
					}
				}
			},
			(err) => console.error(err)
		);
	}

	getZones(){

		this.weatherservice.getZones().subscribe(
			(res:any)=>{

			this.zones = res.zones;

			
			},err => console.error(err)
		)

	}

	showZone(typeZone: boolean) {
		if (typeZone) {
			//Suitable area
			this.zoom = 6;

			this.weatherservice.getTypeZone('Apta').subscribe(

				(res:any) =>{
					console.log(res);

					this.labelZone = 'Apta' + ' - ' + res.zone.description;
					this.lat = res.zone.lat;
					this.lng = res.zone.lng;

					this.countryRestriction = {
						latLngBounds: {
							east: res.zone.east,
							north: res.zone.north,
							south: res.zone.south,
							west: res.zone.west
						},
						strictBounds: true
					};
					

				},err => console.error(err)
			)


		} else if (!typeZone) {

			//Deforestation area

			this.zoom = 6;
			this.weatherservice.getTypeZone('Deforestada').subscribe(

				(res:any) =>{
					console.log(res);

					this.labelZone = 'Deforestada' + ' - ' + res.zone.description;
					this.lat = res.zone.lat;
					this.lng = res.zone.lng;

					this.countryRestriction = {
						latLngBounds: {
							east: res.zone.east,
							north: res.zone.north,
							south: res.zone.south,
							west: res.zone.west
						},
						strictBounds: true
					};
					

				},err => console.error(err)
			)
		
		}
	}

	/*MAP*/
	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`);
	}

	markerDragEnd(m: marker, $event: MouseEvent) {
		console.log('dragEnd', m, $event);
	}

	mapClicked($event: MouseEvent) {
		this.markers.push({
			lat: $event.coords.lat,
			lng: $event.coords.lng,
			draggable: true
		});
	}

	
}
