import { APIProvider } from '@vis.gl/react-google-maps';
import axios from 'axios';
import { useState } from 'react';

// Components
import GoogleMap from '~/components/GoogleMap';
import SearchBox from '~/components/SearchBox';

// Deps
import './App.scss';

function App() {
   const [address, setAddress] = useState('');
   const [places, setPlaces] = useState([]);

   const handleChangeAddress = (e) => {
      setAddress(e.target.value);
   };

   const handleSearchAddress = async (address) => {

      if (!address) return;

      const response = await axios.get(`${import.meta.env.VITE_API_URL}/geocode`, {
         params: {
            address: address,
         },
      });

      if (response.data.results) {
         setPlaces(response.data.results);
      }

      
   };

   const handleClearAddress = () => {
      setAddress('');
      if (places.length > 0) {
         setPlaces([]);
      }
   };

   return (
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
         <div className="App">
            <SearchBox
               address={address}
               onChangeAddress={handleChangeAddress}
               onSearchAddress={handleSearchAddress}
               onClearAddress={handleClearAddress}
            />

            <GoogleMap places={places} />
         </div>
      </APIProvider>
   );
}

export default App;
