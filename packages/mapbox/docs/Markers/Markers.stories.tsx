import React from 'react';
import Mapbox from '../../src/Mapbox';
import { Marker } from 'react-map-gl';

export const Markers = () => (
  <div style={{ width: '100%', height: '500px' }}>
    <Mapbox
      mapPosition={{
        latitude: 55.8714948,
        longitude: 12.4934543,
        zoom: 8,
      }}
      mapStyle="mapbox://styles/mzdk/ck34cntqj05z91cmjvsjyfw4s"
      mapboxApiAccessToken="pk.eyJ1IjoibXpkayIsImEiOiJjazJuZTlobWkwcGc5M21sbml2cWd0Njl5In0.BasnEPdX95SqEnvv2AOjoQ"
      mapMarkers={[
        <Marker latitude={55.8714948} longitude={12.4934543}>
          <div
            style={{
              backgroundColor: 'green',
              color: 'white',
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50px',
            }}
          >
            DHI
          </div>
        </Marker>,
      ]}
    />
  </div>
);
