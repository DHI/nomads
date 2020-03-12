import React from 'react';
import Mapbox from '../../src/Mapbox';
import DeckGL from 'deck.gl';
import { ViewportProps } from 'react-map-gl';
import { BitmapLayer } from '@deck.gl/layers';

export const BitmapImage = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Mapbox
        mapPosition={{
          latitude: 37.773972,
          longitude: -122.431297,
          zoom: 10,
        }}
        mapStyle="mapbox://styles/mzdk/ck34cntqj05z91cmjvsjyfw4s"
        mapboxApiAccessToken="pk.eyJ1IjoibXpkayIsImEiOiJjazJuZTlobWkwcGc5M21sbml2cWd0Njl5In0.BasnEPdX95SqEnvv2AOjoQ"
      >
        {({ viewport }: { viewport: ViewportProps }) => (
          <DeckGL
            viewState={viewport}
            height={viewport.height}
            width={viewport.width}
            layers={[
              new BitmapLayer({
                bounds: [-122.519, 37.7045, -122.355, 37.829],
                image: 'https://raw.githubusercontent.com/uber-common/deck.gl-data/master/website/sf-districts.png',
                desaturate: 0,
                transparentColor: [0, 0, 0, 0],
                tintColor: [255, 255, 255],
              }),
            ]}
          />
        )}
      </Mapbox>
    </div>
  );
};
