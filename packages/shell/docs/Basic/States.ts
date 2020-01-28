import { MapSource, MapInteractions, MapPosition } from './types';

interface Props {
  mapInteractions?: MapInteractions;
  mapPosition?: MapPosition;
  mapSource?: MapSource;
}

export const data: Props = {
  mapInteractions: {
    onClick: undefined,
    onHover: undefined,
    scrollZoom: true,
    dragPan: true,
    dragRotate: true,
    doubleClickZoom: true,
    touchZoom: true,
    touchRotate: true,
  },
  mapPosition: {
    longitude: 0,
    latitude: 0,
    zoom: 10,
  },
  mapSource: {
    collection: {
      type: 'FeatureCollection',
      features: [],
    },
    layers: [],
  },
};

export const States = (props: Props): Props => null;

States.defaultProps = data;
