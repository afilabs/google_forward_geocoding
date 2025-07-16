import { useMap } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';

const MapHandler = ({ places }) => {
   const map = useMap();

   useEffect(() => {
      if (!map || !places || places.length === 0) return;

      if (places.length === 1) {
         const { lat, lng } = places[0].geometry.location;
         map.panTo({ lat, lng });
         map.setZoom(14);
         return;
      }

      const bounds = new window.google.maps.LatLngBounds();
      places.forEach((place) => {
         const { lat, lng } = place.geometry.location;
         bounds.extend(new window.google.maps.LatLng(lat, lng));
      });

      const center = bounds.getCenter();
      map.panTo(center);

      map.fitBounds(bounds);
   }, [map, places]);

   return null;
};

export default MapHandler;
