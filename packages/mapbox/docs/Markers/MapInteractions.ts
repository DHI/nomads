import { MapInteractions as Interface } from '../../src/types';

export const data: Interface = {
  onClick: undefined,
  onHover: undefined,
  scrollZoom: true,
  dragPan: true,
  dragRotate: true,
  doubleClickZoom: true,
  touchZoom: true,
  touchRotate: true,
};

export const MapInteractions = (props: Interface): Interface => null;

MapInteractions.defaultProps = data;
