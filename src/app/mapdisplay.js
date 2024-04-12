'use client';
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import locationArrow from './../../public/static/images/icon-location.svg';
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';


export default function MapDisplay() {
    return(
        <div id="map" className="h-[400px]">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}