import { MapPosition as Interface } from '../../src/types';

export const data: Interface = {
  latitude: 54.57677248526063,
  longitude: 11.288690865039825,
  zoom: 7.5,
};

export const MapPosition = (props: Interface): Interface => null;

MapPosition.defaultProps = data;
