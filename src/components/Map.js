import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import RoomIcon from '@material-ui/icons/Room';
import Popup from './Popup';
import '../App.css';

const API_URL = 'https://api.ncmodernist.org';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 35.7883046,
    longitude: -78.7811964,
    zoom: 10,
    width: '100%',
    height: '100vh',
  });

  const [locations, setLocations] = useState([])
  const [selected, setSelected] = useState(null)

  return (
    <div className="map">
      <h1>Browse Modernist Houses</h1>
      <div className="map-container">
        <ReactMapGL 
            {...viewport}
            mapboxApiAccessToken='pk.eyJ1Ijoia2F3cmVubiIsImEiOiJjazQ5eXQyZnEwOXJnM2twbzhkZDcyaGNoIn0.MLpQQjuYYTECfMbhjNp9uA'
            onViewportChange={viewport => setViewport(viewport)}
            mapStyle="mapbox://styles/kawrenn/ck49zf8ug0j0d1cqiglffmllj"
            className="map"
            onLoad={() => {
              fetch(API_URL)
                .then(res => res.json())
                .then(resJson => setLocations(resJson)) 
                .catch(err => console.log(err))
            }}
          >
              {locations.map(item => (
                <Marker 
                    key={item.id} 
                    latitude={item.lat} 
                    longitude={item.lng}
                >
                    <button className='marker-btn' onClick={(e) => {
                        e.preventDefault()
                        setSelected(item)
                    }}>
                        <RoomIcon 
                            fontSize="large"
                            className="icon"
                        />
                    </button>  
              </Marker>
            ))}
            {selected 
                ? (
                <Popup 
                    selected={selected}
                    setSelected={setSelected}
                />
                ) 
                : null
            }
          </ReactMapGL>
      </div>
    </div>
  );
}

export default Map;