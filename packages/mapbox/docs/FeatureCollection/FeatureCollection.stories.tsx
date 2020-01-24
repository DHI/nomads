import React from 'react';
import Mapbox from '../../src/Mapbox';

import { data as mapSource } from './MapSource';
import { data as mapPosition } from './MapPosition';

export const FeatureCollection = () => (
  <div style={{ width: '100%', height: '500px' }}>
    <Mapbox
      mapPosition={mapPosition}
      mapSource={mapSource}
      mapStyle="mapbox://styles/mzdk/ck34cntqj05z91cmjvsjyfw4s"
      mapboxApiAccessToken="pk.eyJ1IjoibXpkayIsImEiOiJjazJuZTlobWkwcGc5M21sbml2cWd0Njl5In0.BasnEPdX95SqEnvv2AOjoQ"
    />
  </div>
);
