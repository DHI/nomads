import { MapInteractions as Interface } from '../../types';

const handleHover = ({ features }: any) => console.log(features);

export const data: Interface = {
  onClick: undefined,
  onHover: handleHover,
  scrollZoom: true,
  dragPan: true,
  dragRotate: true,
  doubleClickZoom: true,
  touchZoom: true,
  touchRotate: true,
};

export const MapInteractions = (props: Interface): Interface => null;

MapInteractions.defaultProps = data;
