import { Marker as GMarker, InfoWindow, useAdvancedMarkerRef } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';

// Deps
import './Marker.scss';

const Marker = ({ place }) => {
   const [infowindowOpen, setInfowindowOpen] = useState(true);
   const [markerRef, marker] = useAdvancedMarkerRef();

   const position = { lat: place.geometry.location.lat, lng: place.geometry.location.lng };

   useEffect(() => {
      setInfowindowOpen(false);
   }, [position.lat, position.lng]);

   return (
      <>
         <GMarker
            ref={markerRef}
            position={position}
            onClick={() => setInfowindowOpen((prev) => !prev)}
         />

         {infowindowOpen && (
            <InfoWindow className="info-window" anchor={marker} headerDisabled>
               <div className="info-detail">
                  <div className="info-header">{place.formatted_address}</div>

                  <div className="info-location">
                     {position.lat}, {position.lng}
                  </div>
               </div>

               <button className="btn-close" onClick={() => setInfowindowOpen(false)}>
                  X
               </button>
            </InfoWindow>
         )}
      </>
   );
};

export default Marker;
