// Deps
import './SearchBox.scss';

const SearchBox = ({ address, onSearchAddress, onChangeAddress, onClearAddress }) => {
   return (
      <div className="SearchBox">
         <div className="input-group">
            <label className="label">Location</label>
            <input placeholder="Enter your location" onChange={onChangeAddress} value={address} />
         </div>

         <div className="button">
            <button className="btn clear-btn" onClick={onClearAddress}>
               Clear
            </button>

            <button className="btn geocode-btn" onClick={() => onSearchAddress(address)}>
               Geocode
            </button>
         </div>
      </div>
   );
};

export default SearchBox;
