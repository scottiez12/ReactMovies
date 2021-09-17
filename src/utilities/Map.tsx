import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import coordinateDTO from "./coordinates.model";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});

L.Marker.prototype.options.icon = defaultIcon;

export default function Map(props: mapProps) {
  const [coordinates, setCoordinates] = useState<coordinateDTO[]>([]);

  return (
    <MapContainer
      center={[38.563190955815976, -90.38380475012788]}
      zoom={14}
      style={{ height: props.height }}
    >
      <TileLayer
        attribution="React Movies"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClick
        setCoordinates={(coordinates) => {
          setCoordinates([coordinates]);
        }}
      />
      {coordinates.map((coordinate, index) => (
        <Marker key={index} position={[coordinate.lat, coordinate.lng]} />
      ))}
    </MapContainer>
  );
}

interface mapClickProps {
  setCoordinates(coordinates: coordinateDTO): void;
}

function MapClick(props: mapClickProps) {
  useMapEvent("click", (eventArgs) => {
    props.setCoordinates({
      lat: eventArgs.latlng.lat,
      lng: eventArgs.latlng.lng,
    });
  });
  return null;
}

interface mapProps {
  height: string;
}

Map.defaultProps = {
  height: "500px",
};
