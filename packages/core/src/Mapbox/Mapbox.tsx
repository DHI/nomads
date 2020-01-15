import React, { SFC, useEffect, useState } from 'react';
import ReactMapGL, { Source, Layer, FlyToInterpolator } from 'react-map-gl';
import { easeCubicInOut } from 'd3-ease';

import { Props } from './types';

import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox: SFC<Props> = ({
  mapboxApiAccessToken,
  mapStyle,
  mapSource = {},
  mapPosition = {},
  mapInteractions = {},
  children,
  ...rest
}) => {
  const hasConfig = !!mapStyle && !!mapboxApiAccessToken;

  const [viewport, setViewport] = useState({});

  useEffect(() => {
    const handleSetViewport = (viewportToSet: Object) =>
      setViewport({
        ...viewportToSet,
        transitionDuration: 500,
        transitionInterpolator: new FlyToInterpolator(),
        transitionEasing: easeCubicInOut,
      });
    if (hasConfig) handleSetViewport(mapPosition);
  }, [hasConfig, mapPosition]);

  if (!hasConfig) return null;

  const { collection, layers = [] } = mapSource;

  const isSourceVisible = !!collection;

  const hasPosition = Object.keys(mapPosition).length;

  if (!hasPosition) return null;

  return (
    <ReactMapGL
      mapStyle={mapStyle}
      mapboxApiAccessToken={mapboxApiAccessToken}
      {...viewport}
      {...mapInteractions}
      width="100%"
      height="100%"
      onViewportChange={(viewportToSet: Object) => setViewport(viewportToSet)}
      {...rest}
    >
      {isSourceVisible && (
        <Source type="geojson" data={collection}>
          {layers.map(layer => (
            <div key={layer.id}>
              <Layer {...layer} />
            </div>
          ))}
        </Source>
      )}
      {children && children({ viewport })}
    </ReactMapGL>
  );
};

export default Mapbox;
