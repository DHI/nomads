import React from 'react';
import Mapbox from '../../src/Mapbox';
import DeckGL from 'deck.gl';
import { GeoJsonLayer } from '@deck.gl/layers';

export const GeoJSON = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Mapbox
        mapPosition={{
          latitude: 49.254,
          longitude: -123.13,
          zoom: 11,
          pitch: 45,
          bearing: 0,
        }}
        mapStyle="mapbox://styles/mzdk/ck34cntqj05z91cmjvsjyfw4s"
        mapboxApiAccessToken="pk.eyJ1IjoibXpkayIsImEiOiJjazJuZTlobWkwcGc5M21sbml2cWd0Njl5In0.BasnEPdX95SqEnvv2AOjoQ"
      >
        {({ viewport }: { viewport: object }) => (
          <DeckGL
            viewState={viewport}
            layers={[
              new GeoJsonLayer({
                data:
                  'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/geojson/vancouver-blocks.json',
                opacity: 0.8,
                stroked: false,
                filled: true,
                extruded: true,
                wireframe: true,
                getElevation: ({ properties }: { properties: { valuePerSqm: number } }) =>
                  Math.sqrt(properties.valuePerSqm) * 10,
                getLineColor: [255, 255, 255],
                pickable: true,
              }),
            ]}
          />
        )}
      </Mapbox>
    </div>
  );
};
