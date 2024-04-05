'use client';
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import locationArrow from './../../public/static/images/icon-location.svg';
import { Icon } from 'leaflet';

const arrowIcon = new L.Icon({
    iconUrl: locationArrow,
    iconRetinaUrl: locationArrow,
    iconSize: [32,32],
    shadowSize: [50,64],
    iconAnchor: [22,94],
    shadowAnchor: [4,62],
    popupAnchor: [-3,-76]
})


export default function MapDisplay() {
    return(
        <div id="map" className="h-[400px]">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={arrowIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}