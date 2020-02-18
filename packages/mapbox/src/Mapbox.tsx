import React, { SFC, useEffect, useState, cloneElement } from 'react';
import ReactMapGL, { Source, Layer, FlyToInterpolator } from 'react-map-gl';
import { easeCubicInOut } from 'd3-ease';

import * as Types from './types';

import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox: SFC<Types.Props> = ({
  mapboxApiAccessToken,
  mapInteractions,
  mapPosition,
  mapSource,
  mapStyle,
  mapMarkers = [],
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

  const { collection, layers = [] } = mapSource || {};
  const isSourceVisible = !!collection;

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
            <Layer key={layer.id} {...layer} />
          ))}
        </Source>
      )}
      {mapMarkers.map((mapMarker, index) =>
        cloneElement(mapMarker, { key: index }),
      )}
      {children && children({ viewport })}
    </ReactMapGL>
  );
};

export default Mapbox;
