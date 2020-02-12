import React, { useState, useEffect } from 'react';
import Mapbox from '../../src/Mapbox';

import {
  data as initialMapSource,
  layers,
  getUpdatedCollection,
} from './MapSource';
import { data as mapPosition } from './MapPosition';
import { data as initialMapInteractions } from './MapInteractions';

export const handleGetProperties = (feature: any) => {
  const { properties = {}, layer = {} } = feature;
  const { id, name } = properties;
  const { type } = layer;
  return { id, name, type };
};

export const Interactions = () => {
  const [mapInteractions, setMapInteractions] = useState(
    initialMapInteractions,
  );
  const [hoveringTrack, setHoveringTrack] = useState(undefined);
  const [mapSource, setMapSource] = useState(initialMapSource);

  const handleHover = ({ features = {} }: any) => {
    const hasFeatures = Object.values(features).length;
    if (hasFeatures) {
      const [feature = {}] = features;
      const { id, name, type } = handleGetProperties(feature);
      if (id && name) {
        if (type === 'circle') setHoveringTrack(name);
      } else {
        setHoveringTrack(undefined);
      }
    }
  };

  useEffect(() => {
    setMapInteractions({
      ...mapInteractions,
      onHover: handleHover,
    });
  }, []);

  useEffect(() => {
    setMapSource({
      collection: getUpdatedCollection({
        hoveringTrack,
      }),
      layers,
    });
  }, [hoveringTrack]);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Mapbox
        mapPosition={mapPosition}
        mapSource={mapSource}
        mapInteractions={mapInteractions}
        mapStyle="mapbox://styles/mzdk/ck34cntqj05z91cmjvsjyfw4s"
        mapboxApiAccessToken="pk.eyJ1IjoibXpkayIsImEiOiJjazJuZTlobWkwcGc5M21sbml2cWd0Njl5In0.BasnEPdX95SqEnvv2AOjoQ"
      />
    </div>
  );
};
