import React from 'react';
import Mapbox from '../../src/Mapbox';

export const Basic = () => (
  <div style={{ width: '100%', height: '500px' }}>
    <Mapbox
      mapPosition={{
        latitude: 54.50252689212371,
        longitude: 11.227997839450836,
        zoom: 8,
      }}
      mapStyle="mapbox://styles/mzdk/ck34cntqj05z91cmjvsjyfw4s"
      mapboxApiAccessToken="pk.eyJ1IjoibXpkayIsImEiOiJjazJuZTlobWkwcGc5M21sbml2cWd0Njl5In0.BasnEPdX95SqEnvv2AOjoQ"
    />
  </div>
);
