import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import CustomPin from '../CustomPin/CustomPin';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mockBusinesses = [
  {
    id: 1,
    name: "shawarma shemesh",
    coordinates: [32.0873362,34.8036556],
    availableMeals: 10,
    pickupLocation: "Back alley, near the dumpster"
  },
  {
    id: 2,
    name: "dominic pastrys",
    coordinates: [32.0871129,34.8038699],
    availableMeals: 15,
    pickupLocation: "Side entrance, ask for manager"
  },
  {
    id: 3,
    name: "mae cafe",
        coordinates: [32.0861067,34.8030383],
        availableMeals: 8,
        pickupLocation: "Front of the restaurant, look for the green awning"
  }
];

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  const userIcon = L.icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return position === null ? null : (
    <Marker position={position} icon={userIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function Map() {
  const [signedUpBusinessId, setSignedUpBusinessId] = useState(null);

  const handleSignUp = (businessId) => {
    setSignedUpBusinessId(businessId);
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer 
        center={[32.0870795,34.8041963]} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        {mockBusinesses.map(business => (
          <CustomPin 
            key={business.id} 
            business={business} 
            onSignUp={handleSignUp}
            isSignedUp={signedUpBusinessId === business.id}
          />
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;