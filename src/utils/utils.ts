export type HotelModel = {
	_id: string;
	name: string;
	location: string;
	imageUrl: string;
	rooms: string[];
}

export type RoomModel = {
	_id: string;
	type: string;
	price: number;
	imageUrl: string;
}

export const baseUrl = "https://hotel-backend1.herokuapp.com";