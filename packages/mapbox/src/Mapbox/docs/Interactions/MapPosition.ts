import { MapPosition as Interface } from '../../types';

export const data: Interface = {
  latitude: 48.3746392511429,
  longitude: -4.461500644683838,
  zoom: 13.5,
};

export const MapPosition = (props: Interface): Interface => null;

MapPosition.defaultProps = data;
