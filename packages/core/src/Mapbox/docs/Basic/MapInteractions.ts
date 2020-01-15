import { MapInteractions as Interface } from '../../types';

export const data: Interface = {
  scrollZoom: true,
  dragPan: true,
  dragRotate: true,
  doubleClickZoom: true,
  touchZoom: true,
  touchRotate: true,
};

export const MapInteractions = (props: Interface): Interface => null;

MapInteractions.defaultProps = data;
