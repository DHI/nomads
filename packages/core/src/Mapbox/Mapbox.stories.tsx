import React from 'react';
import Mapbox from './Mapbox';

export const Basic = () => (
  <div style={{ width: '100%', height: '50vh' }}>
    <Mapbox
      mapPosition={{
        latitude: 48.35,
        longitude: -4.5,
        zoom: 11,
        bearing: 0,
        pitch: 0,
      }}
      mapStyle="mapbox://styles/mzdk/ck34cntqj05z91cmjvsjyfw4s"
      mapboxApiAccessToken="pk.eyJ1IjoibXpkayIsImEiOiJjazJuZTlobWkwcGc5M21sbml2cWd0Njl5In0.BasnEPdX95SqEnvv2AOjoQ"
    />
  </div>
);
