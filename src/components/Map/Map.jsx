import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useHotels } from "../contexts/HotelsProvider";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Map() {
  const { isLoading, hotels } = useHotels();

  if (isLoading) return <p>data is Loading...</p>;
  const [mapCenter, setMapCenter] = useState([51, 3]);
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(() => {
    if (lat && lng) setMapCenter([lat, lng]);
  }, [lat, lng]);

  return (
    <div className="mapContainer">
      {
        <MapContainer className="map" center={mapCenter} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <ChangeCenter position={mapCenter} />
          {hotels.map((item) => {
            return (
              <Marker key={item.id} position={[item.latitude, item.longitude]}>
                <Popup>{item.host_location}</Popup>
              </Marker>
            );
          })}
        </MapContainer>
      }
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
