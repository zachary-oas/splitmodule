import { latLng, MapOptions, tileLayer } from 'leaflet';

export const Map1Options: MapOptions = {
  layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18, attribution: '...',
    }),
  ],
  zoom: 10,
  zoomControl: false,
  center: latLng(1.290270, 103.851959),
};
export const Map2Options: MapOptions = {
  layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18, attribution: '...',
    }),
  ],
  zoom: 10,
  zoomControl: false,
  center: latLng(1.290270, 103.851959),
};
