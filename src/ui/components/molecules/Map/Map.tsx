import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from "framer-motion"
import L from 'leaflet'

import './style.css'

import {shops} from '@ui/configuration/shops.config.js';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { CSSProperties } from 'react';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function Map({style}: { style: CSSProperties }) {

  return(
    <motion.div
      className="map"
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <MapContainer center={[60, 57]} zoom={4} scrollWheelZoom={true} style={{width: '100%', height: '100%'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {shops.map(item => (
          <Marker position={{ lat: item.position[0], lng: item.position[1] }}>
            <Popup>
              {item.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.div>
  )
}

export default Map;
