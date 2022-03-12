export interface marker {
	lat: number;
	lng: number;
	label?: any;
	draggable: boolean;
}

export interface animalsMarker {
	id: number;
	type: string;
	description: string;
	id_owner: number;
	lat: number;
	lng: number;
	status: string;
}

export interface countryRestriction {
	latLngBounds: {
		east: number;
		north: number;
		south: number;
		west: number;
	};
	strictBounds: true;
}
