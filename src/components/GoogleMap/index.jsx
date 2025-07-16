import { Map } from '@vis.gl/react-google-maps';

// Compoents
import MapHandler from './MapHandler';
import Marker from './Marker';

// Deps
const DEFAULT_CENTER = { lat: 49.25307278849622, lng: -123.12095840000302 };

const GoogleMap = ({ places }) => {
   return (
      <div className="GoogleMap">
         <Map
            style={{
               height: '100dvh',
               width: '100dvw',
            }}
            defaultZoom={12}
            defaultCenter={DEFAULT_CENTER}
            gestureHandling="greedy"
            disableDefaultUI
            reuseMaps
         >
            <MapHandler places={places} />

            {places.length > 0 &&
               places.map((place) => {
                  return <Marker key={place.place_id} place={place} />;
               })}
         </Map>
      </div>
   );
};

export default GoogleMap;
