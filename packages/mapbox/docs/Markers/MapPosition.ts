import { MapPosition as Interface } from '../../src/types';

export const data: Interface = {
  latitude: undefined,
  longitude: undefined,
  zoom: undefined,
  bearing: undefined,
  pitch: undefined,
};

export const MapPosition = (props: Interface): Interface => null;

MapPosition.defaultProps = data;
