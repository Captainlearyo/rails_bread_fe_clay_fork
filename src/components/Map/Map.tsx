import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import countriesGeoJson from '../../data/countries.json';
import { useNavigate } from 'react-router-dom';
import './Map.css';

const MapComponent = () => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '80vh', width: '100%' }}>
      <TileLayer
        url="https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=a7eda3efcc6b40449d697372a8171c3b"
        attribution='&copy; <a href="http://thunderforest.com">Thunderforest</a> contributors'
        noWrap={true}
      />
      <GeoJSONLayer />
    </MapContainer>
  );
};

const GeoJSONLayer = () => {
  const map = useMap();
  const navigate = useNavigate();

  useEffect(() => {
    const geoJsonLayer = L.geoJSON(countriesGeoJson as any, {
      style: () => ({
        fillColor: "rgba(62, 109, 78, 0.5)",
        color: '#3e6d4e',
        weight: 1,
        dashArray: '3',
        fillOpacity: 0.5
      }),
      onEachFeature: (feature, layer) => {
        layer.on('click', () => {
          const countryName = feature.properties.name;
          navigate(`/breads/${countryName}`);
        });
      },
    });
      

    geoJsonLayer.addTo(map);
  }, [map, navigate]);

  return null;
}

export default MapComponent;