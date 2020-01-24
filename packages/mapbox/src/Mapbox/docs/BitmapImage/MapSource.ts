import { MapSource as Interface } from '../../types';

export const data: Interface = {
  collection: undefined,
  layers: undefined,
};

export const MapSource = (props: Interface): Interface => null;

MapSource.defaultProps = data;
